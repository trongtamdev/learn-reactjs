import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';
import counterReducer from '../features/Counter/counterSlice';


const rootReducer = {
    count: counterReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;