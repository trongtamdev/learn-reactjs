import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features'


const rootReducer = {
    counter: counterReducer,
};

const store =configureStore({
    reducer: rootReducer,
});

export default store;