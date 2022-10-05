import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory(onChange) {
  return (
    <Box>
        <Typography>DANH MỤC SẢN PHẨM</Typography>
    </Box>
  );
}

export default FilterByCategory;
