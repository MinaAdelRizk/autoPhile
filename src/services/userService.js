import http from './httpService'
import { apiUrl } from '../config.json'
import _, { concat } from "lodash"
import { jwtDecode } from 'jwt-decode';

const apiEndPoint = apiUrl + "/users"

export function register(user) {
    return http.post(apiEndPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}


// export function updateCar(user, selectedCar) {
//     if (user._id) {
//         const body = { ...user }
//         delete body._id
//         const updated = { ...body, "selectedCar": selectedCar }
//         return http.put(apiEndPoint + "/" + user._id, updated)
//     }
// }

export async function updateUserCar(car) {
    localStorage.setItem("selectedCar", `${car.make} ${car.model} ${car.year}`)
    let { data: user } = await http.get(apiEndPoint + "/me")
    if (!user) return
    await http.put(apiEndPoint + '/' + user._id, car)
    window.location = '/'
}