import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/main"} className="navbar-brand">My TODO List</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li><a href="#" className="nav-link">{props.mainLink}</a></li>
            <li><a href="#" className="nav-link">{props.userLink}</a></li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};