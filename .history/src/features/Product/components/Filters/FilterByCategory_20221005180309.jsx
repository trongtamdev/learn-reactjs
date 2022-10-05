import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory(onChange) {
    const [categoryList, setCategoryList] =useState([])

    useEffect(()=>{
        (())()
    },[])

  return (
    <Box>
        <Typography>DANH MỤC SẢN PHẨM</Typography>
    </Box>
  );
}

export default FilterByCategory;
