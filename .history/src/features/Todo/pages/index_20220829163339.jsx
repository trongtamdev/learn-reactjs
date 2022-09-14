import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList)

    const handleTodo




    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}/> 
        </div>
    );
}

export default TodoFeature;