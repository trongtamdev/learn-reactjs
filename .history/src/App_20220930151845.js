// import './App.css';
import Header from 'components/Header';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = productApi.getAll(params);
      // console.log(productList);
    };

    fetchProducts();
  });
  return (
    <div className="App">
      <Header />
      <butt
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>

        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
      Footer
    </div>
  );
}

export default App;
