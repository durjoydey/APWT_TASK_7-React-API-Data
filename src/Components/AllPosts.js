import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from './Post';

const AllPosts = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/medicine/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {/* <table>
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.med_name}</td>
                    <td >{post.med_details}</td>
                </tr>
                    ))}
            </table> */}
            {
                posts.map(post=>(
                    <Post id={post.id}  m_name={post.m_name} man_date={post.man_date} ex_date={post.ex_date} m_category={post.m_category} stock={post.stock} key={post.id}></Post>


                ))
            }

                
        </div>
    )

}
export default AllPosts;