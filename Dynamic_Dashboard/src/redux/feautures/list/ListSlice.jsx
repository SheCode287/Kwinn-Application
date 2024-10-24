import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        id: 1,
        title: "Active Users",
        percentage: { Score: "27/80", Graph: "" }
    },
    {
        id: 2,
        title: "Questions Answered",
        percentage: { Score: "3,298", Graph: "" }
    },
    {
        id: 3,
        title: "Av. Session Length",
        percentage: { Score: "2m 34s", Graph: "" }
    },
    {
        id: 4,
        title: "Starting Knowledge",
        percentage: { Score: "64%", Graph: "public/Graph.svg" }
    },
    {
        id: 5,
        title: "Current Knowledge",
        percentage: { Score: "86%", Graph: "public/Graph.svg" }
    },
    {
        id: 6,
        title: "Knowledge gain",
        percentage: { Score: "+34%", Graph: "public/Graph.svg" }
    },
]



export const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    }
})


// export const {updateUser}=ListSlice.actions
export default ListSlice.reducer;