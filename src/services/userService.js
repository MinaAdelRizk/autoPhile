import http from './httpService'
// import * as apiUrl from '../config.json'

const apiEndPoint = `http://localhost:3000/api/users`

export function register(user) {
    return http.post(apiEndPoint, {
        email: user.username,
        name: user.name,
        mobile: user.mobile,
        password: user.password
    })
}

export async function updateUserCar(car) {
    localStorage.setItem("selectedCar", `${car.make} ${car.model} ${car.year}`)
    let { data: user } = await http.get(apiEndPoint + "/me")
    if (!user) return
    await http.put(apiEndPoint + '/' + user._id, car)
    window.location = '/'
}