import { Box, Button, TextField, Typography } from "@material-ui/core";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {

  const[]

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
