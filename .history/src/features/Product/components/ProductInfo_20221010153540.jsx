import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  description: {
    margin: theme.spacing(2, 0),
  },

  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },

  salePrice: {},

  originalPrice: {},

  promotionPercent: {},
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        <Box component="span" className={classes.originalPrice}>
          {originalPrice}
        </Box>
        <Box component="span" className={classes.promotionPercent}>
          {promotionPercent}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
