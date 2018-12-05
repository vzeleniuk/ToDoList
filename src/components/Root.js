import React from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/listActions';

import Main from './Main';
import Aside from './Aside';
import { Pulse } from 'react-preloading-component';

class Root extends React.Component {

  componentDidMount() {
    this.props.fetchLists();
  }
  
  render() {
    const {lists} = this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            {lists 
              ? <Aside lists={lists}/>
              : <Pulse />
            }
          </div>
          <div className="col-md-8 col-8">
            <Main/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    lists: state.list.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)