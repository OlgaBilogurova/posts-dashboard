import React from 'react';
import './sidebar.css';
import { ButtonName } from '../utils/constants';

const Sidebar = ({ numOfUsers, numOfPosts, openPopup }) => {
  const {CREATE_POST} = ButtonName;
  return (
    <aside className="sidebar">
      <button className="add-new-posts-btn" type="button" onClick={() => openPopup(null, CREATE_POST)}>
        Add New Post
      </button>

      <div className="stats">
        Showing:
        <div className="stats-item">{numOfUsers || 0} Users</div>
        <div className="stats-item">{numOfPosts || 0} Posts</div>
      </div>
    </aside>
  );
};

export default Sidebar;
