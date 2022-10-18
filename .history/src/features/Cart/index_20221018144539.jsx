import {
  Box,
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },

  table: {
    marginTop:theme.spacing(3),
    maxWidth: '100%',
  },
  text:{
    margin:theme.spacing(2,2,0,0 )
  }
}));

CartFeature.propTypes = {};

function CartFeature(props) {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const cart = useSelector((state) => state.cart.cartItems);
  console.log('list items:', cart);
  return (
    <Box>
      {/* <ul>
        {cart.map((item) => (
          <li key={item.id}>
            tên: {item.product.name} số lượng: {item.quantity} đơn giá: {item.product.salePrice * item.quantity}
          </li>
        ))}
      </ul> */}
      <Typography component="h1" variant="h4">Giỏ hàng</Typography>
      <Table className={classes.table} component={Paper}>
        <TableHead>
          <TableRow>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="right">Giá gốc</TableCell>
              <TableCell align="right">Giá khuyến mãi</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Thành tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.product.name}
              </TableCell>
              <TableCell align="right">{formatPrice(item.product.originalPrice)}</TableCell>
              <TableCell align="right">{formatPrice(item.product.salePrice)}</TableCell>
              <TableCell align="right"> {item.quantity} </TableCell>
              <TableCell align="right"> {formatPrice(item.product.salePrice * item.quantity)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* product: {cart.cartItems.product} */}
      <Typography className={classes.text} align="right">Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography className={classes.text} align="right"> Thành tiền: {formatPrice(cartTotal)}</Typography>
      <Button variant="contained" color="primary" to="\products">
        Trang chủ
      </Button>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
