import { configureStore } from "@reduxjs/toolkit"
import 


const rootReducer = {
    counter: counterReducer,
};

const store =configureStore({
    reducer: rootReducer,
});

export default store;