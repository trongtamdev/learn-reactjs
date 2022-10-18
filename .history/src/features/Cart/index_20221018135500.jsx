import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
    width: '800px',
  },
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
      <List className={classes.root}>
        <ListItem className={classes.listItem}>
          {cart.map((item) => (
            <ListItemText key={item.id}>
              tên: {item.product.name} số lượng: {item.quantity} đơn giá: {item.product.salePrice * item.quantity}
            </ListItemText>
          ))}
        </ListItem>
      </List>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            tên: {item.product.name} số lượng: {item.quantity} đơn giá: {item.product.salePrice * item.quantity}
          </li>
        ))}
      </ul>

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableCell>Tên sản phẩm</TableCell>
                <TableCell align="right">Đơn giá</TableCell>
                <TableCell align="right">Số lượng</TableCell>
                <TableCell align="right">Thành tiền</TableCell>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {cart.map((item) => (
          <TableRow key={item.id}>
            tên:  số lượng:đơn giá:
            <TableCell component="th" scope="row">
            {item.product.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right"> {item.quantity} </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
          </TableRow>
        ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* product: {cart.cartItems.product} */}
      <Typography>Tổng số sản phẩm là: {cartItemsCount}</Typography>
      <Typography> Thành tiền: {formatPrice(cartTotal)}</Typography>
      {/* <Typography style={{color:'red'}}> đang trong quá trình hoàn thiện !</Typography> */}
    </Box>
  );
}

export default CartFeature;
