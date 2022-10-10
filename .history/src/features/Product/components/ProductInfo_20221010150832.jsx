import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box>
        <Typography>{name}</Typography>
        <Typography>{shortDescription}</Typography>

        <Box>
            <Box component="span">{salePrice}</Box>
            <Box component="span">{origi}</Box>
            <Box component="span">{salePrice}</Box>
        </Box>
    </Box>
  );
}

export default ProductInfo;
