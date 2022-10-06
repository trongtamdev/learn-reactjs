import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {

  const[values, setValues]=useState({
    salePrice_gte:0
  })

  const handleSubmit=()=>{

  }

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField name="salePrice_gte"></TextField>
        <span>-</span>
        <TextField name="salePrice_lte"></TextField>
      </Box>

      <Button variant="outline" color="primary" onClick={handleSubmit}>Áp dụng</Button>
    </Box>
  );
}

export default FilterByPrice;
