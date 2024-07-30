// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    refreshToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            console.log()
            state.token = action.payload.access_token; // Expecting an object with access_token
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
    },
});

export const { loginSuccess, logout, setToken } = authSlice.actions;

export default authSlice.reducer;
