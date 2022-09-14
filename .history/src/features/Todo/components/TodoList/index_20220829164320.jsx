import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo, idx) => {
        if (<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) =>(
                <li 
                key={todo.id} 
                className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                onClick={() =>handleTodoClick(todo, idx)}
                >
                    {todo.title}</li>
            ))} 
        </ul>
    );
}

export default TodoList;