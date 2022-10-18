import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';


CartFeature.propTypes = {
    action:pyo
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector)
    const cartItemsCount=useSelector(cartItemsCountSelector)

    return (
        <Box>
            {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
            <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
            <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
            {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
          
        </Box>
    );
}

export default CartFeature;