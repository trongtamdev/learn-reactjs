const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart:false,
        cartItem:[],

    },
    reducers: {
        showMiniCart(state) {
            return state + 1;
        },

        hideMiniCart(state) {
            return state - 1;
        },
    },
});

const {actions, reducer } = cartSlice;
export const {increase, decrease}=actions; //named export
export default reducer ; // default export
