import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,
};

function TodoForm(props) {
    const form=use

    return (
        <div>
            Todo Form
            <InputField></InputField>
        </div>
    );
}

export default TodoForm;