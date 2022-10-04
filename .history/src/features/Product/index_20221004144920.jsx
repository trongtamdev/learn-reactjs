import { Box } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const match=useRouteMatch();
    return (
        <Box>
            <Switch>
                <Route path={match.url} exact component={ListPage}></Route>
            </Switch>
        </B>
    );
}

export default ProductFeature;