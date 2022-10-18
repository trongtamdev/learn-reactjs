import { Box, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import PropTypes from 'prop-types';

CartFeature.propTypes = {
    cartItems: PropTypes.array,
};

function CartFeature({cartItems}) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  return (
    <Box>
      {cartItems.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        </Grid>
      ))}
      <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
