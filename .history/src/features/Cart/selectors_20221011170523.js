import {createSelector} from '@reduxjs/toolkit'

const  cartItemSelector=(state)=>state.cart.cartItems;

//Count number of product in cart
const cartItemCountSelector=createSelector(
    cartItemSelector,
    (cartItems) =>cartItems.reduce((count,item)=> ,0)
    ) 