import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            TODO SHARED UI

            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>

                <Route component={}></Route>
            </Switch>


        </div>
    );
}

export default TodoFeature;