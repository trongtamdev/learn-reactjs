import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters(filters, onChange) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      categoryId: newCategoryId,
    };
    onChange(newFilters);
  };

  return (
    <div>
      <Box>
        <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
      </Box>
    </div>
  );
}

export default ProductFilters;
