import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { Route, Switch } from 'react-router-dom';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    return (
        <div>
            <Switch>
                <Route path="/todos" con></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;