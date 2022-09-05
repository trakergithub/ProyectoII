import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
        <div className="container">
          <h1 className="title">
              Hello world <span aria-label="emoji" role="img">🔥</span>
          </h1>
          <input type="text" className="new-task"/>
        </div>
      </header>
    </div>
  );
}

export default App;
