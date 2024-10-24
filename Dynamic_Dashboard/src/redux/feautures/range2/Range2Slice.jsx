import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        heading:"Strongest Topics",
        otherInfo:{photo:'public/Rectangle 25.svg',
                   Topic:"Covid Protocols",
                   color: '',
                   rate:'95%',
                   score:'Correct'}

    },
    {
        heading:"",
        otherInfo:{photo:'public/Rectangle 24.svg',
                   Topic:"Cyber Security Basics",
                   color: '',
                   rate:'92%',
                   score:'Correct'}

    },
    {
        heading:"",
        otherInfo:{photo:'public/Rectangle 23.svg',
                   Topic:"Social Media Policies",
                   color: '',
                   rate:'89%',
                   score:'Correct'}

    },

]

export const Range2Slice = createSlice({
    name:'range2',
    initialState,
    reducers:{

    },
})




export default Range2Slice.reducer;

