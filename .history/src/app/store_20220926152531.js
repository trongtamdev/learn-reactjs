import { configureStore } from "@reduxjs/toolkit"



const rootReducer = {
    counter: counterReducer,
}

const store =configureStore({
    reducer: rootReducer,
})

expo