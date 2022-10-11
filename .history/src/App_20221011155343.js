// import './App.css';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>

        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/products" component={Cart}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
