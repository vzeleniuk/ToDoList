import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <p>User Name</p>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  greet: PropTypes.func
}