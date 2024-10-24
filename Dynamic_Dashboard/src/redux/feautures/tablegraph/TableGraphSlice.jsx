import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
    header:{h:"Activity", b:'Month'},
    xValues:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
    yValues: [0, 100, 200, 300, 400],
    barColors:[".", ".", ".", ".", ".", ".", ".", ".", ".",".",".",".", ],
    }

]

export const TableGraphSlice = createSlice({
    name:'tableGraph',
    initialState,
    reducers:{

    },
})




export default TableGraphSlice.reducer;

