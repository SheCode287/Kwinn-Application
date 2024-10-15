import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    studentData: [],
    loading: false,
    error: null
};
export const addUser = createAsyncThunk(
    'posts/add',
    async (studentData) => {
        return studentData;
    }
);

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {
        postAdded(state, action) {
            state.push(action.payload)
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.studentData.push(action.payload)

            })

            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message

            })
    }


})

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;