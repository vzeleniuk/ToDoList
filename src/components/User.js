import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  onGreet() {
    alert('Hello, User!');
  }

  render() {
    return(
      <div className="container-main">
        <div className="row">
          <h1 className="cover-heading mt-4 mb-4">User Name</h1>
        </div>
        <div className="row">
          <button onClick={this.onGreet} className="btn btn-primary">Greet</button>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  greet: PropTypes.func
}