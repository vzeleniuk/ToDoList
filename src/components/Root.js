import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Main from './Main';
import Aside from './Aside';
import { Pulse } from 'react-preloading-component';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      loading: true
    }
  }

  fromAside(params) {
    this.setState({
      list: params
    })
  }

  render() {
    console.log(this.props.lists)
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            {this.props.lists 
              ? <Aside callback={(params) => this.fromAside(params)} lists={this.props.lists}/>
              : <Pulse />
            }
            
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
  lists: PropTypes.array,
  list: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    // lists: state.firebase.ordered.lists
  }
}

export default compose(
  connect(mapStateToProps),
  // firebaseConnect(['lists'])
)(Root)