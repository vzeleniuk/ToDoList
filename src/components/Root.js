import React from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../store/actions/listActions';

import Main from './Main';
import Aside from './Aside';
import { Pulse } from 'react-preloading-component';

class Root extends React.Component {

  render() {
    console.log('is root re rendering?', this.props.lists.lists)
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            {this.props.lists.lists 
              ? <Aside lists={this.props.lists.lists} added={this.props.lists.added}/>
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

  componentDidMount() {
    this.props.dispatch(fetchLists());
    // this.props.store.subscribe(() => {
    //   this.setState({reduxState: this.props.store.getState()});
    // })
  }

  shouldComponentUpdate(nextProps) {
    const differentLists = this.props.lists.lists !== nextProps.lists.lists;
    console.log('shoul update?', differentLists)
    return differentLists;
  }

}

const mapStateToProps = (state) => {
  console.log('map state to props', state)
  return { 
    lists: state.list.lists
  }
}

export default connect(mapStateToProps)(Root)