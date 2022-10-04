import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl=product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER

  return (
    <Box padding={1}>
      {/* https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg */}
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%"></img>
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent > 0 ? `-` :''}
      </Typography>
    </Box>
  );
}

export default Product;
