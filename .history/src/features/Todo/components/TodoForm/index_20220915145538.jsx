import React from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,
};

function TodoForm(props) {
    return (
        <div>
            Todo Form
            <Input
        </div>
    );
}

export default TodoForm;