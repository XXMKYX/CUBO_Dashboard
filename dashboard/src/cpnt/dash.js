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
                       data:[100,200,300]
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