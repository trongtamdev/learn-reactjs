import React from 'react';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {
    
};

function ProductDescription({product={}}) {
    return (
        <div dangerouslySetInnerHTML={__h}>
            {product.description}
        </div>
    );
}

export default ProductDescription;