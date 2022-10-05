import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory(onChange) {
    const [categoryList, setCategoryList] =useState([])

    useEffect(()=>{
        (async()=>{
            try {
                const response=await categoryApi.getAll()
                console.log(response);
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        })()
    },[])

const handleCategoryClick =() =>{
    
}

  return (
    <Box>
        <Typography>DANH MỤC SẢN PHẨM</Typography>
        <ul>
            {categoryList.map(category=><li key={category.id}>{category.name}</li>)}
        </ul>
    </Box>
  );
}

export default FilterByCategory;
