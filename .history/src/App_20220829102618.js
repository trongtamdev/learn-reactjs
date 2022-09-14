import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Tam';
  const age = '23';
  const isMale = true;
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

        <p>Xin chao {name} - {age} - {isMale ? 'Male':'Female'}</p>

        {isMale ? <p>Male</p>:<p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale }

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
