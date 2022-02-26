import _ from 'underscore'
import http from './httpService';
import * as configFile from '../config.json'
import { toast } from 'react-toastify';

const { apiUrl } = configFile
const apiEndPoint = apiUrl + "/fluids"

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

export function getFluids() {
    return http.get(apiEndPoint)
}

export function getMnf() {
    const { data } = http.get(apiEndPoint)
    return _.uniq(data.map(d => d.mnf))
}

export async function addFluid(fluid) {
    try {
        await http.post(apiEndPoint, fluid, config)
    } catch (ex) {
        console.log(ex)
    }
}

export async function deleteFluid(fluid) {
    await http.delete(`${apiEndPoint}/${fluid._id}`)
}