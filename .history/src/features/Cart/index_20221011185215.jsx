import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)
    return (
        <div>
            Tổng số sản phaamrlaf: {cartItemsCount}
            Cart Feature {cartTotal}
        </div>
    );
}

export default CartFeature;