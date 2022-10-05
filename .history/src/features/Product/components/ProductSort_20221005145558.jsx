import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onchange: PropTypes.func,
};

function ProductSort(props) {
  return (
    <Tabs>
      <Tabs label="Giá thấp đến cao"></Tabs>
      <Tabs label=" thấp đến thấp"></Tabs>
    </Tabs>
  );
}

export default ProductSort;