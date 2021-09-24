import React, { useEffect, useState } from "react"
//import data from './output.json';

export default function Data() {

	//const data = useData()
    const [data, setData] = useState({});
    useEffect(() => {

        const fetchData = async()=>{
            console.log('data');
			
            const responsev = await fetch("/output.json");
            let json = await responsev.json();
            setData(json);
            console.log('data2');

        };

        fetchData();

    }, []);
    
	return (

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
	              </tr>
	            </thead> 
	            <tbody>
                
				{data.map((item, index )=> (
					<tr key={`post-list-key ${index}`}>
					  <td>{item.Year}</td>
					  <td>{item.Institutional_sector_name}</td>
					  <td>{item.Institutional_sector_code}</td>
					  <td>{item.Descriptor}</td>
					</tr>
				  ))}

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
	)

}