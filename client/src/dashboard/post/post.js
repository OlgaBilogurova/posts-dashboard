import React from "react";
import "./post.css";

const Post = ({ post }) => {
    return (
        <div className="post">
            <div>Post title: {post.title}</div>
            <div>Post body: {post.body}</div>
            <div>User id: {post.userId}</div>
        </div>
    )
}

export default Post;
