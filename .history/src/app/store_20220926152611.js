import { configureStore } from "@reduxjs/toolkit"
import counter


const rootReducer = {
    counter: counterReducer,
};

const store =configureStore({
    reducer: rootReducer,
});

export default store;