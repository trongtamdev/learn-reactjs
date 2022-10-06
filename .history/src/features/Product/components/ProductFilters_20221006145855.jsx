import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange=(values)=>{
    if(onChange){
      onChange(values)
    }
  }
  return (

      <Box>
        <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
        <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
        <Filte
      </Box>

  );
}

export default ProductFilters;
