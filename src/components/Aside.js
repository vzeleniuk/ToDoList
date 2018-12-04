import React from 'react';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';
import { chooseList, addListAsync, removeList } from '../actions/listActions'

class Aside extends React.Component {
  static initialState = {
    newList: {
      id: '',
      listName: '',
      dateCreated: '',
      items: []
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      ...Aside.initialState,
      activeList: ''
    }
    this.onNewListName = this.onNewListName.bind(this);
  }

  onNewListName(e) {
    const id = Date.now();
    this.setState({
      newList: {
        id,
        listName: e.target.value,
        dateCreated: new Date().toISOString(id),
        items: []
      }
    })
  }

  sortLists() {
    const map = new Map(Object.entries(this.props.lists));
    map[Symbol.iterator] = function* toMap() {
      yield* [...this.entries()].sort((a, b) => new Date(a[1].dateCreated) - new Date(b[1].dateCreated));
    }
    return [...map];
  }

  setActive(listKey) {
    this.setState({
      ...this.state,
      activeList: listKey
    })
  }

  addList() {
    this.props.dispatch(addListAsync(this.state.newList));
    this.setState({
      ...Aside.initialState
    })
  }

  deleteList(list) {
    this.props.dispatch(removeList(list));
    this.props.dispatch(chooseList());
  }

  render() {
    return(
      <aside>
        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists 
            ? <ul className="list-group">            
                {this.sortLists().map(list => (
                  <li className={`list-group-item list-group-item-action ${this.state.activeList === list[0] ? 'active' : null}`}
                    key={list[0]}>
                    <p className="mb-0" onClick={() => {
                        this.props.dispatch(chooseList(list[0])); 
                        this.setActive(list[0]) 
                      }}>{list[1].listName}</p>
                    <button type="button" className="btn btn-danger btn-sm btn-del btn-list"
                            onClick={() => this.deleteList(list[0])}>x</button>
                  </li>
                ))}
              </ul>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="mt-4 mb-4 text-center">
        {this.props.lists 
          ? <input className="form-control col-12" type="text" value={this.state.newList.listName} 
            placeholder="Enter New ToDo List Title" onChange={(event) => this.onNewListName(event)}/>
          : null}
          <button disabled={!this.state.newList.listName} onClick={() => this.addList()} 
            className="btn btn-primary mt-4">Add List</button>
        </div>
      </aside>
    )
  }
}

export default connect()(Aside)