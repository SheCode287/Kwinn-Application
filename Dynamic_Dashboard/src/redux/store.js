import { asyncThunkCreator, configureStore } from "@reduxjs/toolkit";
import listReducer from "./feautures/list/ListSlice";
import rangeReducer from "./feautures/Range/RangeSlice"
import range2Reducer from "./feautures/range2/Range2Slice"
import tableGraphReducer from "./feautures/tablegraph/TableGraphSlice"
import customersReducer from "./feautures/customers/CustomersSlice"
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        list: listReducer,
        range: rangeReducer,
        range2: range2Reducer,
        tableGraph: tableGraphReducer,
        customers: customersReducer,
    }
})



