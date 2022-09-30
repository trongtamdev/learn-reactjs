const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {}
    reducers: {
        increase(state) {
            return state + 1;
        },

        decrease(state) {
            return state - 1;
        },
    },
});

const {actions, reducer } = userSlice;
export const {increase, decrease}=actions; //named export
export default reducer ; // default export
