import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history=useHistory()

  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const handleClick=()=>{
    //Navigate to detail page: /products/productId
    history.push
  }

  return (
    <Box padding={1} onClick={handleClick}>
      {/* https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg */}
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%"></img>
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
