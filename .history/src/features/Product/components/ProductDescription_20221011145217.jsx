import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

ProductDescription.propTypes = {
    product: pto
};

function ProductDescription({product={}}) {
    return (
       <Paper elevation={0} style={{}}>
         <div dangerouslySetInnerHTML={{__html:product.description}}> 
        </div>
       </Paper>
    );
}

export default ProductDescription;