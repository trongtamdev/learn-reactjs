import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { Route, Switch } from 'react-router-dom';
import ListPage from './ListPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    return (
        <div>
            <Switch>
                <Route path="/todos" component={ListPage} exact></Route>
                <Route path="/todos/:todoId" component={D}></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;