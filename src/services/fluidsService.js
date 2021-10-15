import http from './httpService';
import _ from 'underscore'

const apiEndPoint = 'http://localhost:3000/api/fluids'

export function getFluids() {
    return http.get(apiEndPoint)
}

export function getMnf() {
    const { data } = http.get(apiEndPoint)
    return _.uniq(data.map(d => d.mnf))
}

export async function addFluid(fluid) {
    try {
        await http.post(apiEndPoint, fluid)
    } catch (ex) {
        console.log(ex)
    }
}

export async function deleteFluid(fluid) {
    try {
        await http.delete(apiEndPoint + '/' + fluid._id)
    } catch (error) {

    }
}