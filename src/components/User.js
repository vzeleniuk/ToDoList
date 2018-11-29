import React from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../store/actions/listActions';

class User extends React.Component {
  onGreet() {
    alert('Hello, User!');
  }
  
  componentDidMount() {
    this.props.dispatch(fetchLists())
    console.log('this.props setimeout in mount', this.props, this.props.lists, this.state)
  }

  componentWillUnmount() {
    console.log('this.props unmount', this.props, this.props.lists)
  }

  render() {
    console.log('render', this.props, this.props.lists)
    return(
      <div className="container-main">
        <div className="row">
          <h1 className="cover-heading mt-4 mb-4">User Name</h1>
        </div>
        <div className="row">
          <button onClick={() => this.onGreet()} className="btn btn-primary">Greet</button>
          <button onClick={() => this.props.dispatch(fetchLists())} className="btn btn-primary">fetchLists</button>
        <p>
          {this.props.list 
          ? this.props.list.lists[0].id
          : null
          }
        </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('map state to props', state);
  return { lists: state.list.lists }
}

export default connect(mapStateToProps)(User)