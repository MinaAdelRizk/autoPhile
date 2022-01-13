import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndPoint = apiUrl + '/manufacturers'

export async function getManufacturers() {
    const { data: manufacturers } = await http.get(apiEndPoint)
    return manufacturers
}
