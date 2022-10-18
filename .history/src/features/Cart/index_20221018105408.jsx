import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import CartList from './CartList';
import { cartItemsCountSelector, cartTotalSelector, listCart } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  //   const listCartItem = useSelector(listCart);
  //   console.log(listCartItem);
  const thumbnailUrl = item.thumbnail ? `${STATIC_HOST}${item.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;


  const cart = useSelector((state) => state.cart.cartItems);
  console.log('list items:', cart);
  return (
    <Box>
      <ul>
        {cart.map((item)=>(
          <li key={item.id}>tên: {item.product.name} số lượng: {item.quantity} đơn giá: {item.product.salePrice*item.quantity}</li>
        ))}
      </ul>
      {/* product: {cart.cartItems.product} */}
      <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
