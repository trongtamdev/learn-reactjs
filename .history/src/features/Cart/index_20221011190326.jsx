import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { Box, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)
    return (
        <Box>
            {add}
            <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
            <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
            <Typography> Project vẫn đang trong quá trình hoàn thiện !</Typography>
          
        </Box>
    );
}

export default CartFeature;