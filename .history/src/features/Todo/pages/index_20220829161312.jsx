import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            dstatus: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]


    return (
        <div>
            <h3>Todo List</h3>
            <dddddddđ todoList={todoList}/> 
        </div>
    );
}

export default TodoFeature;