import React from 'react'

export default function PostDetail2(props) {
    const {post,year} = props
    return (
        <>


        {year == 'all' ? (
            
            <tr>
			  <td>{post.Year}</td>
			  <td>{post.Institutional_sector_name}</td>
			  <td>{post.Institutional_sector_code}</td>
			  <td>{post.Descriptor}</td>
              <td>{post.Values}</td>
			</tr>//data true
            
        ) : (
            <>
            {post.Year == year ? (
                <tr>
                  <td>{post.Year}</td>
                  <td>{post.Institutional_sector_name}</td>
                  <td>{post.Institutional_sector_code}</td>
                  <td>{post.Descriptor}</td>
                  <td>{post.Values}</td>
                </tr>
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
