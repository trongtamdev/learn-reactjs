const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart:false,
        cartItem:[{
            id:1,
            product
        }]
    },
    reducers: {
        increase(state) {
            return state + 1;
        },

        decrease(state) {
            return state - 1;
        },
    },
});

const {actions, reducer } = cartSlice;
export const {increase, decrease}=actions; //named export
export default reducer ; // default export
