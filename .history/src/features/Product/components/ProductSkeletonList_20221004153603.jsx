import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({length}) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map()}
      </Grid>
    </Box>
  )
  ;
}

export default ProductSkeletonList;
