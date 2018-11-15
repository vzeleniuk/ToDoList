import React from 'react';
import data from '../mock-ToDoLists.json';

export class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <h1 className="cover-heading mt-4 mb-4">It is ToDoList Component</h1>
          <p>November 15, 2018</p>
          <div className="text-left">
          {console.log('--Console?--', this.props)}
          {/* <p>The ID: {this.props.params.id}</p> */}
          </div>
        </div>
      </div>
    )
  }
}
