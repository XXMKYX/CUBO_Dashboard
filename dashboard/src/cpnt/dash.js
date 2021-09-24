import React, { Component } from 'react';
import {Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PostData from './output.json';

class Dash extends Component {
    
    render() { 
        const {post} = this.props
        return (
        <div className="dash">
               
            <Bar
               data={{
                   labels:PostData.map(item=>item.Year),
                   datasets:[{
                       label: 'Valores por año',
                       data:PostData.map(item=>item.Values)
                   }]
               }}
               options={{ 
                   maintainAspectRatio: false ,
                  
                }}
                //width={100}
                //height={50}
            />
        </div>
        )
    }
}
 
export default Dash ;