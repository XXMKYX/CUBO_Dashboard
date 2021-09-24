import React, { Component } from 'react';
import PostData from './output.json';
var a=0,b=0;

class PostDetail extends Component{
    render(){
        const {post} = this.props
        if(post.Year=='2008.03'){
            a++;
        }
        //document.write(a);
        console.log(post.Year=='2008.03');
        return(
			<tr>
			  <td>{post.Year}</td>
			  <td>{post.Institutional_sector_name}</td>
			  <td>{post.Institutional_sector_code}</td>
			  <td>{post.Descriptor}</td>
              <td>{post.Values}</td>
			</tr>
        )
    }
}

export default PostDetail