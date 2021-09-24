import {useState,useEffect } from 'react';
import logo from './files/CUBO.png';
import './App.css';
import Dash from './cpnt/dash';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tablita from './cpnt/table';
import dass from './cpnt/DashDetail';
import { render } from 'react-dom';

function App() {
//const comboVar='selectYear'

const [cambio, setCambio] = useState(false);
  
const [comboVar, setComboVar] = useState('selectYear');
useEffect(() => {
  (()=>{
      if(cambio){
        setComboVar(document.getElementById('combo').value);
        setCambio(false);
        console.log(document.getElementById('combo').value);
      }
  })();
}, [cambio])


  return (
    <div className="App">
      <header className="App-header">
      <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
      </header>

      <div>
      <br></br>
      <h1>Dashboard</h1>
      <Dash/>
      </div>

      <div>
      <br></br>
      <h1>Dashboard</h1>

      <select id='combo' onChange={() => setCambio(true)}>
        <option value='selectYear'>Selecciona el año</option>
        <option value='2008.03'>2008</option>
        <option value='2009.03'>2009</option>
        <option value='2010.03'>2010</option>
        <option value='2011.03'>2011</option>
        <option value='2012.03'>2012</option>

      </select>

      </div>
      <Tablita comboVar={comboVar}/>
      <dass comboVar={comboVar}/>
    </div>
  );
}

export default App;
