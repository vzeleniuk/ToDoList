import React from 'react';
import {Link} from 'react-router-dom';
import data from '../mock-ToDoLists.json';

export class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  }

  render() {
    return(
      <aside>
        <h4 className="mt-4 mb-4">My TODOs</h4>
        <div className="list-group">
          {this.state.data.map((name, i) =><Link to={`/${name.id}`} className="list-group-item list-group-item-secondary" key={i}>{name.listName}</Link>)}
          {/* <Link to={"/root"} className="list-group-item list-group-item-secondary">{this.state.data[0].listName}</Link> */}
        </div>
      </aside>
    )
  }
}