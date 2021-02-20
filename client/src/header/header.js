import React from "react";
import "./header.css";

const Header = ({ users, filterPostsByUserName, sortPosts }) => {
    return (
        <header className="app-header">
          <h1>My App Title</h1>

          <div className="filters-container">
            <div className="dropdown-container">
              <label htmlFor="userName">Filter on</label>
              <select className="dropdown-select" id="userName"
                      onChange={filterPostsByUserName}
              >
              <option value="0">Username</option>
              {users.map(user => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
              </select>
            </div>

            <div className="dropdown-container">
              <label htmlFor="post">Sort by</label>
              <select className="dropdown-select" id="post" onChange={sortPosts}>
                <option value="0">Title/Content</option>
                <option value="1">Title A-Z</option>
                <option value="2">Title Z-A</option>
                <option value="3">Word count in post body</option>
              </select>
            </div>
          </div>
        </header>
    )
}

export default Header;
