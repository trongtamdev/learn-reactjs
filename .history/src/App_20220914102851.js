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
      <p><NavLink to="/todos" activeClassName='active-menu'>Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName='active'>Album</NavLink></p>
      <S
      Footer
    </div>
  );
}

export default App;