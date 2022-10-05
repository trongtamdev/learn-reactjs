import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

FilterByCategory.propTypes = {
    onChange
};

function FilterByCategory(props) {
  return (
    <Box>
        <Typography>DANH MỤC SẢN PHẨM</Typography>
    </Box>
  );
}

export default FilterByCategory;
