import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndPoint = apiUrl + "/users"

export function register(user) {
    return http.post(apiEndPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}


export async function updateUserCar(car) {
    localStorage.setItem("selectedCar", `${car.make} ${car.model} ${car.year}`)
    let { data: user } = await http.get(apiEndPoint + "/me")
    if (!user) return
    await http.put(apiEndPoint + '/' + user._id, car)
    window.location = '/'
}