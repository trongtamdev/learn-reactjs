import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const match=useRouteMatch();
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