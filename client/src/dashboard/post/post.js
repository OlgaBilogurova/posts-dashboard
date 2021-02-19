import React from "react";
import "./post.css";
import {ButtonName} from "../../utils/constants";

const Post = ({ post, userName, openPopup }) => {
  const {DELETE_POST, EDIT_POST} = ButtonName;
    return (
        <div className="post-container">

          <div className="post-header">
            <button className="post-btn" type="button" onClick={() => openPopup(post, EDIT_POST)}>
              Edit
            </button>

            <button className="post-btn" type="button" onClick={() => openPopup(post, DELETE_POST)}>
              Delete
            </button>
          </div>

          <div className="post-body-wrap">
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
            <div className="post-user">== {userName}</div>
          </div>
        </div>
    )
}

export default Post;
