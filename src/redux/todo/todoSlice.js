import {createSlice} from '@reduxjs/toolkit';
import {getAllTodos} from './todoOperations';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        item: [],
        error: null,
    },
    extraReducers: {
        [getAllTodos.pending]: (state) => {
            state.error = null;
        },
        [getAllTodos.fulfilled]: (state, action) => {
            state.item = action.payload;
        },
        [getAllTodos.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
});

export default todoSlice.reducer;