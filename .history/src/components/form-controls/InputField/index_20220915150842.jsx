import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object,
};

function InputField(props) {
    return (
        <div>
            <TextField fullWidth></TextField>
        </div>
    );
}

export default InputField;