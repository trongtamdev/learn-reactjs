import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
    const {form, name, }
  return (
    <Controller 
        name={name} 
        control={form.control}
        as={TextField}

        fullWidth
        label={label}
        >
      <TextField fullWidth></TextField>
    </Controller>
  );
}

export default InputField;
