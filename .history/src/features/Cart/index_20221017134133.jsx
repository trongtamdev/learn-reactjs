import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const listCartItem = useSelector(cartItemsCountSelector);

  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <Box>
      product: {cart.cartItems.product}
      <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
