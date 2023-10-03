import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'https://6396a6efa68e43e418083c0a.mockapi.io/',
});

axiosInstance.interceptors.request.use(
    config => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

export default axiosInstance;
