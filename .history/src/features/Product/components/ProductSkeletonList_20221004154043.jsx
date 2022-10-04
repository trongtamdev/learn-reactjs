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
        {Array.from(new Array(length)).map((x, index)=>(
          <Grid item key={index}>
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
        ))}
      </Grid>
    </Box>
  )
  ;
}

export default ProductSkeletonList;
