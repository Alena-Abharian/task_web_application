import {createAsyncThunk} from '@reduxjs/toolkit';

import axios from "../../lib/axios";

export const getAllTodos = createAsyncThunk(
    'todo/getAllTodos',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/tasks');
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    },
);