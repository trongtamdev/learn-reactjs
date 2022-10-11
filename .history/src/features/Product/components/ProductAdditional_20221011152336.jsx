import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';

ProductAdditional.propTypes = {
    product: PropTypes.object,
};

function ProductAdditional({product={}}) {
    const safeDescription=DOMPurify.sanitize(product.reviews)
  return (

      <Paper elevation={0} style={{ padding: '15px' }}>
        <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
      </Paper>

  );
}

export default ProductAdditional;
