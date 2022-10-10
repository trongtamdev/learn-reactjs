import React from 'react';
import PropTypes from 'prop-types';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    
  );
}

export default ProductInfo;
