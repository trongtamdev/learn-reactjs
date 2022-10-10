import { Box } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage}></Route>
        <Route path={`${match.url}/:productId`} component={}></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
