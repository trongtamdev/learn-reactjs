import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import TodoFeature from './features/Todo/pages';
import Album from './features/Album/components/Album';
import AlbumFeature from './features/Album/pages';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  useEffect(()=>{
    const fetchProducts = async() =>{
      const 
    }

    fetchProducts()
  })
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Album
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>

        <Route path="/" component={TodoFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
      Footer
    </div>
  );
}

export default App;
