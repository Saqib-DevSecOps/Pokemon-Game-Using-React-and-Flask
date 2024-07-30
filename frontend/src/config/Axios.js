import axios from 'axios';
import store from "./Store";
import { logout, setToken } from "./authSlice";

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`;
            console.log('Request Config:', config);
        } else {
            console.log('No token found in state');
        }
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor to handle token expiration and other errors
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        console.error('Response Error:', error);

        // If the request fails with a 401 Unauthorized error
        if (error.response?.status === 401) {
            console.log('Unauthorized error detected');
            if (!originalRequest._retry) {
                originalRequest._retry = true;
                console.log('Retrying request with token refresh');
                // Implement token refresh logic if needed
                // For now, just log out the user
                store.dispatch(logout());
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
