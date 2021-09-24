import React, { Component } from 'react';
import {Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

class Dash extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataDash:{
                labels: ['Institutional','asset','values'],
                datasets:[
                    {
                    label:'Years',
                    data:[
                        2008,
                        2009,
                        2010,
                        2011,
                        2012
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(255,99,132,0.6)',
                        'rgba(255,99,132,0.6)'
                    ]
                    }
                ]
            }
        }
    }

    render() { 
        return (
        <div className="dash">
            <Bar
                data={this.state.dataDash}
                //width={100}
                //height={50}
                options={{ maintainAspectRatio: false }}
            />

        </div>
        )
    }
}
 
export default Dash ;