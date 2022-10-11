import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cartItems;

//Count number of product in cart
const cartItemCountSelector = createSelector(
    cartItemSelector,
     (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

//calculate total of cart
const cartTotalSelector = createSelector(
    cartItemSelector,
     (cartItems) =>
  cartItems.reduce((total, item) => total + item.s, 0)
);