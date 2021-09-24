import React from 'react'
import PostData from './output.json';
import PostDetail from './PostDetail';

export default function table(props) {
    const {comboVar}=props
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
              <th scope="col">Values</th>
              </tr>
            </thead> 
            <tbody>

            {PostData.map((item,index)=>{
              return<PostDetail comboVar={comboVar} post={item} key={`post-list-key ${index}`}/>
            })}

            </tbody>
          </table>
        </div>
      </div>
      <section className="mt-5 mb-5">
        <div align="center">
            Desarrollado para <a href="cubo.city" target="_blank">CUBO</a>
        </div> 
      </section>
    </div>

    )
}
