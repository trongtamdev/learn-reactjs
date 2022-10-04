import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Product from './Product';

ProductList.propTypes = {
  length: PropTypes.array,
};

ProductList.defaultProps = {
  length: [],
};

function ProductList({ data}) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
