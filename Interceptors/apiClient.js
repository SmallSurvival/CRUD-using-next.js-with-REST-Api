import axios from "axios";
import AbortController from "abort-controller"
const CancelToken = axios.CancelToken;
const debounce = require('lodash.debounce');
const source = CancelToken.source();
const controller = new AbortController();


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID,
});

// Request interceptor
apiClient.interceptors.request.use(

  async (request) => {
    // console.log("hello",request);
    // console.log(process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID);
    request.headers = {
      Accept: "application/json",
      // authorization: "my token",
      "Content-Type": "application/json",
    };
    // console.log("request",request.data);
    return request;
  },
  (err) => {
    // save auth token
    if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
        error.config.__isRetryRequest = true;
        return axios(error.config);
      // return error;
    }
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {

      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {

      console.log(error.request);

    } else {

      console.log('Error', error.message);
    }
    return Promise.reject(error);
  }
);

// axios.get(`${process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID}/users/`, {

//   cancelToken: source.token,
//   signal: controller.signal

// }).catch(function (thrown) {

//   if (axios.isCancel(thrown)) {

//     console.log('Request canceled', thrown.message);

//   } else {
//     (error) => {
//       console.log("this");
//       return Promise.reject(error);
//     }
//   }
// });

// axios.post(`${process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID}/users/`, {
//   name: '',
//   job: ''
// }, {
//   cancelToken: source.token
// })

// controller.abort();


export default apiClient;