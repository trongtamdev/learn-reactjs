import React from 'react';
import PropTypes from 'prop-types';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({length}) {
  return <div></div>;
}

export default ProductSkeletonList;
