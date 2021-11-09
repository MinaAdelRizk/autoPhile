import { apiUrl } from '../config.json'
import http from './httpService'

const apiEndPoint = apiUrl + '/categories'

export async function getCategories() {
    let { data } = await http.get(apiEndPoint)
    return data
}