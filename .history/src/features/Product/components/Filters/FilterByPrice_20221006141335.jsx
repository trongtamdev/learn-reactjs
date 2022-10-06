import { Box, Button, TextField, Typography } from "@material-ui/core";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField></TextField>
        <span>-</span>
        <TextField></TextField>
      </Box>

      <Button variant="">Áp dụng</Button>
    </Box>
  );
}

export default FilterByPrice;
