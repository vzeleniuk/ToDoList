import React from 'react';
import data from '../mock-ToDoLists.json';
import PropTypes from 'prop-types';

export class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  }

  getContent(id) {
    this.props.callback(id);
  }

  render() {
    return(
      <aside>
        <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
        <div className="list-group">
          {this.state.data.map((name, i) => (
            <p onClick={() => this.getContent(name.id)} className="list-group-item list-group-item-secondary" key={i}>{name.listName}</p>))}
        </div>
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}