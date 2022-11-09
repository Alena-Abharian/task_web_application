import {createSlice} from '@reduxjs/toolkit';
import {login, logOut, setUserData} from './authOperations';

const initialState = {
    user: {id: null, email: null},
    token: null,
    isLogged: false,
    error: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {

        [login.pending]: (state) => {
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            state.isLogged = true;
        },
        [login.rejected]: (state, action) => {
            state.error = action.payload;
        },

        [logOut.pending]: (state) => {
            state.error = null;
        },
        [logOut.fulfilled](state) {
            state.user = { id: null, email: null };
            state.token = null;
            state.isLogged = false;
        },
        [logOut.rejected]: (state, action) => {
            state.error = action.payload;
        },

        [setUserData.pending]: (state) => {
            state.error = null;
        },
        [setUserData.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            state.isLogged = true;
        },
        [setUserData.rejected]: (state, action) => {
            state.error = action.payload;
        },

    },
});

export default authSlice.reducer;