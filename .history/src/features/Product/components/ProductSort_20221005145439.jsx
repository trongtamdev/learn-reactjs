import React from 'react';
import PropTypes from 'prop-types';

ProductSort.propTypes = {
    activeIndex:PropTypes.number.isRequired,
    onchange:PropTypes.func,
};

function ProductSort(props) {
    return (
        <div>
            Sap xep theo :
        </div>
    );
}

export default ProductSort;