import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

ProductDescription.propTypes = {
    
};

function ProductDescription({product={}}) {
    return (
       <Paper elevation={0} >
         <div dangerouslySetInnerHTML={{__html:product.description}}> 
        </div>
       </Paper>
    );
}

export default ProductDescription;