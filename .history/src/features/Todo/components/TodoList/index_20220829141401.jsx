import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({todoList}) {


    return (
        <ul>
            
        </ul>
    );
}

export default TodoList;