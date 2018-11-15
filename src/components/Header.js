import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">My TODO List</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li><Link to={"/"} className="nav-link">Root</Link></li>
            <li><Link to={"/user"} className="nav-link">User</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};