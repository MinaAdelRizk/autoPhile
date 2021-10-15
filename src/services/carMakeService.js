import http from './httpService';
import _ from 'underscore'

const apiEndPoint = 'http://localhost:3000/api/cars'

export function getMakes() {
    return http.get(apiEndPoint)
}

export async function getModels(makeId) {
    const make = await http.get(apiEndPoint + "/" + makeId)
    let models = make.data.models
    return models
}

// export async function addModel(makeId, modelName) {
//     const make = await http.get(apiEndPoint + "/" + makeId)
//     const { models } = make
//     models && models.push({ name: modelName })
// }