import { apiUrl } from '../config.json'
import http from './httpService'

const apiEndPoint = apiUrl + '/manufacturers'

export async function getManufacturers() {
    const { data: manufacturers } = await http.get(apiEndPoint)
    return manufacturers
}
