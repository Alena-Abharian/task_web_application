import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./auth/authSlice";
import todoSlice from "./todo/todoSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        todo: todoSlice,
    }
})