import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { Box, Typography } from '@material-ui/core';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)
    return (
        <Box>
            <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
            <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
          
        </Box>
    );
}

export default CartFeature;