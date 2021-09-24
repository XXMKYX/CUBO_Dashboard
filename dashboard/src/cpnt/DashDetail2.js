import React from 'react'
import {Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PostData from './output.json';

export default function DashDetail2(props) {
    const {post,year} = props
    return (
        <>


        {year == 'all' ? (
            
            <tr>
			</tr>//data true
            
        ) : (
            <>
            {post.Year == year ? (
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
                //data true
            ) : (
                <tr>
    
                </tr>//data false
            )}   
            
            </>
            //data false
        )}
         
    </>
    )
}
