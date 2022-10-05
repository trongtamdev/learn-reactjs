import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductFilters.propTypes = {
    filter:PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters(filters, onChange) {

    const handleFiltersChange=()=>{

    }
    return (
        <div>
        <Box>
            <Filterby
            </Box>    
        </div>
    );
}

export default ProductFilters;