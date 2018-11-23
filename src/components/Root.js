import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { Main } from './Main';
import Aside from './Aside';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
  }

  fromAside(params) {
    this.setState({
      list: params
    })
  }

  render() {
    const {lists} = this.props.lists;

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            <Aside callback={(params) => this.fromAside(params)} lists={lists}/>
          </div>
          <div className="col-md-8 col-8">
            <Main list={this.state.list}/>
          </div>
        </div>
      </div>
    )
  }
}

Root.propTypes = {
  callback: PropTypes.func,
  list: PropTypes.object
}

const mapStateToProps = (state) => {
  console.log('--From Firebase--', state)
  return {
    lists: state.list.lists
  }
  // lists: state.firebase.ordered.lists
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    'lists'
  ])
)(Root)