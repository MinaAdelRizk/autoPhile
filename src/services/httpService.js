import axios from "axios"
import { toast } from 'react-toastify'
import logger from './logService'

axios.interceptors.response.use(null, error => {

    const expectedError = (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    );

    if (!expectedError) {
        logger.log(error)
        toast.error("An Unexpected error occured")
    }

    return Promise.reject(error)
});

export function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    post: axios.post,
    get: axios.get,
    delete: axios.delete,
    put: axios.put,
    setJwt
}