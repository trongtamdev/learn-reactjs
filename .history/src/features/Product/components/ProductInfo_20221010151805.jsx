import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {},

    description:{},
    
    selePrice:{},

    originalPrice:{},

    promotionPercent:{},

  }));

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box>
        <Typography>{name}</Typography>
        <Typography>{shortDescription}</Typography>

        <Box>
            <Box component="span">{salePrice}</Box>
            <Box component="span">{originalPrice}</Box>
            <Box component="span">{promotionPercent}</Box>
        </Box>
    </Box>
  );
}

export default ProductInfo;
