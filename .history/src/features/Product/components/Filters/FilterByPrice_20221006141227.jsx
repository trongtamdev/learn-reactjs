import { Box, TextField, Typography } from "@material-ui/core";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField></TextField>
        <TextField></TextField>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
