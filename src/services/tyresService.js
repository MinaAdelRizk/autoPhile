import http from './httpService';
import { apiUrl } from '../config.json'

const apiEndPoint = apiUrl + '/tyres'

export function getTyres() {
    return http.get(apiEndPoint)
}

// export function getMnf() {
//     const { data } = http.get(apiEndPoint)
//     return _.uniq(data.map(d => d.manufacturer))
// }

export async function addTyre(tyre) {
    try {
        await http.post(apiEndPoint, tyre)
    } catch (ex) {
        console.log(ex)
    }
}

export async function deleteTyre(tyre) {
    try {
        await http.delete(apiEndPoint + '/' + tyre._id)
    } catch (ex) {
        console.log(ex)
    }
}