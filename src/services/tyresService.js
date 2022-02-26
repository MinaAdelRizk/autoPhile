import http from './httpService';
// import * as apiUrl from '../config.json'

const apiEndPoint = 'http://localhost:3000/api/tyres'

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

export function getTyres() {
    return http.get(apiEndPoint)
}

// export function getMnf() {
//     const { data } = http.get(apiEndPoint)
//     return _.uniq(data.map(d => d.manufacturer))
// }

export async function addTyre(tyre) {
    try {
        console.log(tyre)
        await http.post(apiEndPoint, tyre, config)
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