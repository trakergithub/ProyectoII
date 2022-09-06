import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Sacramento&display=swap" rel="stylesheet"></link>
        <img src={logo} className="App-logo" alt="logo" />
        <p class="titulo">
          Utstal
        </p>
        <span class="texto">
          <em>
          Todos los días tendrás que tomar miles de decisiones
          <br></br>
          y siempre tendrás más de una alternativa 
          <br></br>
          y entre ellas esta vivir en paz.
          </em>
          <br></br>
          Bienvenido acabas de tomar tu primera decisión.
          <br></br>
          Entrar
        </span>
      </header>
    </div>
  );
}

export default App;
