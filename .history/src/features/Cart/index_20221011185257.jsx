import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { Box } from '@material-ui/core';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)
    return (
        <Box>
            <Typography
            Cart Feature {cartTotal}
        </Box>
    );
}

export default CartFeature;