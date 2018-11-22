import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './Main';
import { Aside } from './Aside';

export class Root extends React.Component {
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
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-4">
            <Aside callback={(params) => this.fromAside(params)}/>
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