import axios from "axios"
import { toast } from 'react-toastify'
import logger from './logService'

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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

const exportedObject = {
    post: axios.post,
    get: axios.get,
    delete: axios.delete,
    put: axios.put,
    setJwt
};

export default exportedObject;