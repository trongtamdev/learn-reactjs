const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart:false,
        cartItem:[],

    },
    reducers: {
        showMiniCart(state) {
           state.showMiniCart=true;
        },

        hideMiniCart(state) {
            state.showMiniCart=false;
        },
        addTo
    },
});

const {actions, reducer } = cartSlice;
export const {showMiniCart, hideMiniCart}=actions; //named export
export default reducer ; // default export
