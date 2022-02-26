import http from './httpService'
import jwtDecode from "jwt-decode";

const apiEndPoint = "http://localhost:3000/api/auth"
const tokenKey = "token"

http.setJwt(localStorage.getItem(tokenKey));

async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, jwt)
    const { selectedCar } = jwtDecode(jwt)
    localStorage.setItem("selectedCar", selectedCar.carName)
}

function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt)
}

function logout() {
    localStorage.removeItem(tokenKey)
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey)
        return jwtDecode(jwt);
    } catch (ex) {
        return null
    }
}

function getJwt() {
    localStorage.getItem(tokenKey)
}

const exportedObject = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};

export default exportedObject;