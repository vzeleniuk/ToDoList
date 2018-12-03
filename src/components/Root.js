import React from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../store/actions/listActions';

import Main from './Main';
import Aside from './Aside';
import { Pulse } from 'react-preloading-component';

export class Root extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLists());
  }
  
  render() {
    console.log('root render', this.props.lists ? this.props.lists.lists : 'Firebase non available')
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            {this.props.lists 
              ? <Aside lists={this.props.lists.lists}/>
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
  console.log('map state to props ROOT', state)
  return { 
    lists: state.list.lists
  }
}

export default connect(mapStateToProps)(Root)