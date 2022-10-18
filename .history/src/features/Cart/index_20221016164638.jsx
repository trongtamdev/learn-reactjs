import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import PropTypes from 'prop-types';

CartFeature.propTypes = {
  cartItems: PropTypes.object.isRequired,
};

function CartFeature({ cartItems }) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const productCart = cartItems.map(productCart);
  console.log(productCart)
  return (
    <Box>
      <Box>{cartItems.map((product) => console.log('product'))}</Box>

      <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
