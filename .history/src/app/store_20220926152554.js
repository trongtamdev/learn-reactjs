import { configureStore } from "@reduxjs/toolkit"
im


const rootReducer = {
    counter: counterReducer,
};

const store =configureStore({
    reducer: rootReducer,
});

export default store;