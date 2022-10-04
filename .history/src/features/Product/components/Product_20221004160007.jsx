import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {

    return (
        <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
    );
}

export default Product;