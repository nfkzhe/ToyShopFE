import axios from 'axios';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.2.130:3002/api/'
    });
    // cmd -----> ipconfig -----> IPv4 Address (192.168.1.1)
    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = JSON.parse(localStorage.getItem("token"))
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;