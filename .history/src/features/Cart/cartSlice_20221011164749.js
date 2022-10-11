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
        addToCart(state, action){

        },
        setQuantity(state, action){
            const {id, quantity}=action.payload;
            // check if product  is available 
        },
        removeFromCart(state,action){
            const idNeedToRemove= action.payload
            state.cartItem=state.cartItem.filter((x) =>x.id!== idNeedToRemove)
        },
    },
});

const {actions, reducer } = cartSlice;
export const {showMiniCart, hideMiniCart}=actions; //named export
export default reducer ; // default export
