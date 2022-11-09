import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {token} from "../../lib/axios";

export const login = createAsyncThunk(
    'auth/login',
    async ({isChecked, ...user}, thunkAPI) => {
        try {
            const {data} = await axios.post('/login', user);
            if (isChecked) localStorage.setItem('auth', JSON.stringify(data));
            token.set(data.accessToken);

            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            token.unset();
            localStorage.removeItem('auth')
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    },
);

export const setUserData = createAsyncThunk(
    'auth/setUserData',
    async (authData, thunkAPI) => {
        try {
            token.set(authData.accessToken);
            return authData;
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    },
);