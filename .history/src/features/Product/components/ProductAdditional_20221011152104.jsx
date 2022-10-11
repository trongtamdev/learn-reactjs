import React from 'react';
import PropTypes from 'prop-types';

ProductAdditional.propTypes = {
    
};

function ProductAdditional(props) {
    return (
        <div>
            <Paper elevation={0} style={{padding:'15px'}}>
         <div dangerouslySetInnerHTML={{__html:safeDescription}}> 
        </div>
       </Paper>
        </div>
    );
}

export default ProductAdditional;