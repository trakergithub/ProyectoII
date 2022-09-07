import logo from './img/logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Baloo+2&family=Sacramento&display=swap" rel="stylesheet"></link>
        <img src={logo} className="App-logo" alt="logo" />
        <p class="titulo">
          Healt<br></br>&nbsp;&nbsp;&<br></br>Care
        </p>
        <br></br>
        <span class="texto">
          <em>
          Todos los días tendrás que tomar miles 
          <br></br>
          de decisiones
          y siempre tendrás más
          <br></br>
          de una alternativa 
          y entre ellas esta
          <br></br>
          vivir en paz.
          </em>
          <br></br><br></br>
          Bienvenido 
          <br></br>
          acabas de tomar tu primera decisión.
          <br></br><br></br>
          <a class="Boton">
            Entrar
          </a>
          <br></br><br></br>
        </span>
      </header>
    </div>
  );
}

export default App;
