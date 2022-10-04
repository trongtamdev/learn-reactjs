import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {
    const match= useRouteMatch();
};



function ProductFeature(props) {
    return (
        <div>
            Product Feature
            <Switch>
                <Route path={} exact component={ListPage}></Route>
            </Switch>
        </div>
    );
}

export default ProductFeature;