import axios from "axios";
import logHttpResponse from 'utils/log/logHttpResponse';
// import { getTokenFromStorage } from "src/storage";

let BASE_URL = null;

const { host } = window.location;

if (host.includes('localhost') || host.includes('127.0.0.1')) {
  BASE_URL = 'http://10.10.1.2:8000/sgi-api';  
}

if (host.includes('qa.sunshine-group-of-institute.icebit.in')) {
  BASE_URL = 'https://api.qa.sunshine-group-of-institute.icebit.in/sgi-api';
}

export const sgiApiClient = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {

  }
});

// let headers = {
//   Authorization : `Bearer ${getTokenFromStorage()}`
// };


sgiApiClient.interceptors.response.use(
  (response) => {
    logHttpResponse({ axiosResponse: response })

    return response
  },
  // Custom error handler to flag any non-500 errors from our server.
  // Components can handle these errors specifically by checking for
  // the presence of 'topError'.
  (error) => {
    const { response } = error
    const topError = response && response.status <= 500

    logHttpResponse({ isError: true, axiosResponse: response })

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      topError,
      error,
    })
  },
)


export { BASE_URL };