import React from 'react';
import PropTypes from 'prop-types';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSketetonList.defaultProps = {
  length: 6,
};

function ProductSketetonList({length}) {
  return <div></div>;
}

export default ProductSketetonList;
