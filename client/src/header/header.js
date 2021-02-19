import React from "react";
import "./header.css";

const Header = ({ users, filterByUserName }) => {
    return (
        <header className="app-header">
          <h1>My App Title</h1>

          <div className="filters-container">
            <div className="dropdown-container">
              <label htmlFor="userName">Filter on</label>
              <select className="dropdown-select" id="userName"
                      onChange={filterByUserName}
              >
              {users.map(user => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
              </select>
            </div>

            <div className="dropdown-container">
              <label htmlFor="post">Sort by</label>
              <select className="dropdown-select" id="post">
                <option value="0">Title A-Z</option>
                <option value="1">Word count</option>
              </select>
            </div>
          </div>
        </header>
    )
}

export default Header;
