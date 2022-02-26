import http from './httpService';
import * as configFile from '../config.json'

const { apiUrl } = configFile
const apiEndPoint = apiUrl + "/files"


export async function deleteImage(productImage) {
    try {
        await http.delete(apiEndPoint + '/' + productImage)
    } catch (err) {
        console.log(err)
    }
}