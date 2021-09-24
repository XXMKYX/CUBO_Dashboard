import React, { Component, useState,useEffect } from 'react';
import PostData from './output.json';
import PostDetail2 from './PostDetail2';
var a=0,b=0;

export default function PostDetail(props) {

    const {post,comboVar} = props
    const [year, setYear] = useState('2008.03')

    useEffect(() => {
        (()=>{
            if(comboVar == 'selectYear'){
              setYear('all'); 
            }else{
                setYear(comboVar); 
            }
        })();
    }, [comboVar])

    return(
        <PostDetail2 post={post} year={year}/>
    )
}

