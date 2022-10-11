import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

ProductAdditional.propTypes = {};

function ProductAdditional(props) {
    const safeDescription=DOMPurify.sanitize(product.description)
  return (

      <Paper elevation={0} style={{ padding: '15px' }}>
        <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
      </Paper>

  );
}

export default ProductAdditional;
