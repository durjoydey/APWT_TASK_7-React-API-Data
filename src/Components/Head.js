import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/posts">All Posts</Link>
        </div>

    )
}

export default Head;