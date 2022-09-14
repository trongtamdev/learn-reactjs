import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo/pages';
import Album from './features/Album/components/Album';
import AlbumFeature from './features/Album/pages';
import ColorBox from './components/ColorBox';

function App() {



  return (
    <div className="App">
      {/* <TodoFeature/> */}
      <AlbumFeature />
      <ColorBox />
    </div>
  );
}

export default App;
