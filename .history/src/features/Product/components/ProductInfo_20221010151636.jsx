import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {},
  
    left: {
      width: '400px',
      padding: theme.spacing(1.5),
      borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
  
    right: {
      flex: '1 1 0',
      padding: theme.spacing(1.5),
    },
    // pagination: {
    //   display: 'flex',
    //   flexFlow: 'row nowrap',
    //   justifyContent: 'center',
  
    //   marginTop: '30px',
    //   paddingBottom: '20px',
    // },
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
