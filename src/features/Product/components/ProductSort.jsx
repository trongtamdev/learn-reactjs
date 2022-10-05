import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tabs label="Giá thấp đến cao" value="salePrice:ASC"></Tabs>
      <Tabs label="Giá cao đến thấp" value="salePrice:DESC"></Tabs>
    </Tabs>
  );
}

export default ProductSort;
