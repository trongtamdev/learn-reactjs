import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Tam';
  const age = '23';
  const isFemale = true;
  const student = {
    name: 'Nguyen Trong Tam'
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nguyen Trong Tam
        </p>

        <p>Xin chao {}</p>





        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;