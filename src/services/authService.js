import http from './httpService'
import { apiUrl } from '../config.json'
import jwtDecode from "jwt-decode";

const apiEndPoint = apiUrl + "/auth"
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

function getCurrentUser() {
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

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt

};