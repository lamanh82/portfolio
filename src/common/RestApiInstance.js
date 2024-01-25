import axios from 'axios';

let defaultRequestConfig = {
    baseURL: '/',
    // Uncomment and include additional settings if needed
    // params: {
    //   locale: "en_US",
    //   '_': new Date().getTime(),
    //   withCredentials: true
    // },
};

const defaultRestApi = axios.create(defaultRequestConfig);

defaultRestApi.interceptors.request.use(function (config) {
    // You can perform additional request configuration here if needed
    return config;
}, function (error) {
    // Handle request errors
    return Promise.reject(error);
});

export default defaultRestApi;