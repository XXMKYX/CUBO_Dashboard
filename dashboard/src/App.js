import logo from './files/CUBO.png';
import './App.css';
import Dash from './cpnt/dash';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Dashboard
        </p>
        <br/>
        <Dash/>
        <a
          className="App-link"
          href="https://cubo.city/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Page
        </a>
      </header>
      <div></div>
    </div>
  );
}

export default App;
