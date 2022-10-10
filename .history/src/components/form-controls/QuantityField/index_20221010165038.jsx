import { Box, FormHelperText, IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = !!errors[name];

  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box>
            <IconButton onClick={}>
              <RemoveCircleOutline></RemoveCircleOutline>
            </IconButton>
            <OutlinedInput
            id={name}
            type="number"
            label={label}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          ></OutlinedInput>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
