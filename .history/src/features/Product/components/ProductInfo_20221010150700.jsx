import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box></Box>
  );
}

export default ProductInfo;
