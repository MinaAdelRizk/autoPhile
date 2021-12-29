import { apiUrl } from '../config.json'
import http from './httpService'

const apiEndPoint = apiUrl + '/manufacturers'

export async function getManufacturers(category) {
    let { data } = await http.get(apiEndPoint)
    data = data.filter(d => d.category._id === category)
    console.log(data)
    return data
}