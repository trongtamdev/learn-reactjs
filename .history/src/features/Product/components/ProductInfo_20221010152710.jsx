import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  description: {
    margin: theme.spacing(2, 0),
  },

  priceBox:{
    padding: theme.spacing(2)
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

      <Box className="priceBox">
        <Box component="span">{salePrice}</Box>
        <Box component="span">{originalPrice}</Box>
        <Box component="span">{promotionPercent}</Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
