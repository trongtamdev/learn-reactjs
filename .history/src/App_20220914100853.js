import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo/pages';
import Album from './features/Album/components/Album';
import AlbumFeature from './features/Album/pages';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import { Link, NavLink, Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      Header
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Album</Link></p>
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Album</NavLink></p>
      <Route path="/todos" component={TodoFeature}></Route>
      <Route path="/albums" component={AlbumFeature}></Route>
      Footer
    </div>
  );
}

export default App;
