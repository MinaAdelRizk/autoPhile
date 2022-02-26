// import * as apiUrl from '../config.json'
import http from './httpService'

const apiEndPoint = 'http://localhost:3000/api/manufacturers'

export async function getManufacturers(category) {
    let { data } = await http.get(apiEndPoint)
    data = data.filter(d => d.category._id === category)
    return data
}