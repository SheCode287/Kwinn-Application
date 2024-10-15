import { configureStore } from "@reduxjs/toolkit";
import postSlice from '../Redux/post/postSlice';

export const store = configureStore({
    reducer: {
        posts: postSlice,
    }
})