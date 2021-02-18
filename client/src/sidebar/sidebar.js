import React from "react";
import "./sidebar.css";

const Sidebar = ({ numOfUsers, numOfPosts, addNewPost }) => {
    return (
        <aside className="sidebar">
            <button onClick={addNewPost}>Add New Post</button>

            <div>
                Showing:
                <div>{numOfUsers || 0} Users</div>
                <div>{numOfPosts|| 0} Posts</div>
            </div>

        </aside>
    )
}

export default Sidebar;
