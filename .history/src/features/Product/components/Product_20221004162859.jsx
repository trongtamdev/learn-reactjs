import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl=product.thumbnail
    ? `{${product.thumbnail?.url}`
    : `https://via.placeholder.com/444`

  return (
    <Box padding={1}>
      {/* https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg */}
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%"></img>
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
