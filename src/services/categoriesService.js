// import * as apiUrl from '../config.json'
import http from './httpService'

const apiEndPoint = 'http://localhost:3000/api/categories'

export async function getCategories() {
    let { data } = await http.get(apiEndPoint)
    return data
}

export async function getCategory(name) {
    let { data } = await http.get(apiEndPoint);
    data = data.filter(d => d.name === name)
    return data
}