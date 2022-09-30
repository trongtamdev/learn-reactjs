import { configureStore } from "@reduxjs/toolkit"
import { useReducer } from "react";
import counterReducer from '../features/Counter/counterSlice'


const rootReducer = {
    count: counterReducer,
    user: useRReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;