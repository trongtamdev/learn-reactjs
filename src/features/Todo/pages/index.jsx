import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import DetailPage from './DetailPage';
import ListPage from './ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
