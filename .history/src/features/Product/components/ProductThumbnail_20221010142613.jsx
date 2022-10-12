import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product}) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;


    return (
        <Box>
            <img src=""  alt=""></img>
        </Box>
    );
}

export default ProductThumbnail;