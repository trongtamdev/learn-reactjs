import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChang=(e)=>{

  }

  const handleSubmit = () => {};

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handle}></TextField>
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte}></TextField>
      </Box>

      <Button variant="outline" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
