import { configureStore } from "@reduxjs/toolkit"



const rootReducer = {
    counter: counter
}

const store =configureStore({
    reducer: rootReducer,
})