import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "Blue",
        color:"Pink",
        padding: "15px",
    }

    return (
            <div style={PostStyle}>

                <span>Id: {props.id} <b/></span>
                <span>Med name: {props.m_name}<b/></span>
                <span>Med details: {props.man_date}<b/></span>
                <span>Men date: {props.ex_date}<b/></span>
                <span>Exp date: {props.m_category}<b/></span>
                <span>Med category: {props.stock}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;