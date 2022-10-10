import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product}) {
    return (
        <Box>
            <img ></img>
        </Box>
    );
}

export default ProductThumbnail;