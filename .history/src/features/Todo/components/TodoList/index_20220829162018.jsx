import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({todoList}) {


    return (
        <ul>
            {todoList.map(todo =>(
                <li key={todo.id} className={classnames({com})}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;