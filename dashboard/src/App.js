import logo from './files/CUBO.png';
import './App.css';
import Dash from './cpnt/dash';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import PostData from './cpnt/output.json';
import PostDetail from './cpnt/PostDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <a
          className="App-link"
          href="https://cubo.city/"
          target="_blank"
          rel="noopener noreferrer"
        >
          -> Web Page
        </a><br></br>
      </header>

      <div>
      <br></br>
      <h1>Dashboard</h1>
      <Dash/>
      </div>
      
      <div className="container mt-5" align="center">
	      <h4>Lista de Data</h4>
	      <div className="row">
	        <div className="col-md-12">
	          <table className="table table-bordered">
	            <thead className="thead-dark">
	              <tr>
	                <th scope="col">Year</th>
	                <th scope="col">Institutional_sector_name</th>
	                <th scope="col">Institutional_sector_code</th>
	                <th scope="col">Descriptor</th>
                  <th scope="col">Values</th>
	              </tr>
	            </thead> 
	            <tbody>

                {PostData.map((item,index)=>{
                  return<PostDetail post={item} key={`post-list-key ${index}`}/>
                })}

      	      </tbody>
	          </table>
	        </div>
	      </div>
	      <section className="mt-5 mb-5">
	        <div align="center">
	            Desarrollado to <a href="cubo.city" target="_blank">CUBO</a>
	        </div> 
	      </section>
    	</div>


    </div>
  );
}

export default App;
