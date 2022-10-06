import { Box, Button, TextField, Typography } from "@material-ui/core";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {

  const handleSubmit=()=>{

  }

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField name="salePrice"></TextField>
        <span>-</span>
        <TextField></TextField>
      </Box>

      <Button variant="outline" color="primary" onClick={handleSubmit}>Áp dụng</Button>
    </Box>
  );
}

export default FilterByPrice;
