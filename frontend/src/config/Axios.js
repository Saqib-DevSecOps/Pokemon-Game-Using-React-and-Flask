// src/config/Axios.js
import axios from 'axios';
import store from "./Store";
import {logout, setToken} from "./authSlice";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = store.getState().auth.refreshToken;
            try {
                const response = await axiosInstance.post('/refresh-token', { refreshToken });
                const { access_token } = response.data;
                store.dispatch(setToken(access_token));
                originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                store.dispatch(logout());
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
