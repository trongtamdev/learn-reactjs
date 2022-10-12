import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { Box, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';
import { addToCart } from './cartSlice';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)
    const listCart=
    return (
        <Box>
            <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
            <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
            <Typography> Project vẫn đang trong quá trình hoàn thiện !</Typography>
          
        </Box>
    );
}

export default CartFeature;