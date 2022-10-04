import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {
    
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