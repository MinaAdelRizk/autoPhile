import http from './httpService';

const apiEndPoint = 'http://localhost:3000/api/cars'

export function getMakes() {
    return http.get(apiEndPoint)
}

export async function getModels(makeId) {
    const make = await http.get(apiEndPoint + "/" + makeId)
    let models = make.data.models
    return models
}
