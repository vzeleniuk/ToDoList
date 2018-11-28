import React from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../store/actions/listActions';

class User extends React.Component {
  onGreet() {
    alert('Hello, User!');
  }

  componentDidMount() {
    this.props.dispatch(fetchLists())
    console.log('this.props mount', this.props)

  }

  render() {
    console.log('this.props', this.props.lists)
    return(
      <div className="container-main">
        <div className="row">
          <h1 className="cover-heading mt-4 mb-4">User Name</h1>
        </div>
        <div className="row">
          <button onClick={() => this.onGreet()} className="btn btn-primary">Greet</button>
          {/* <button onClick={() => this.props.dispatch(fetchLists())} className="btn btn-primary">Greet</button> */}
        {/* <p>
          {this.props 
          ? this.props
          : null
          }
        </p> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { lists: state.lists }
}

export default connect(mapStateToProps)(User)