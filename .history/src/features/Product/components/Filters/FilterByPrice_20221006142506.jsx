import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange=(e)=>{
    const {name,value}
    setValues(prevValues =>({
      ...prevValues,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange}></TextField>
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange}></TextField>
      </Box>

      <Button variant="outline" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
