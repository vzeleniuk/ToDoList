import React from 'react';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';
import { chooseList, addListAsync, removeList } from '../store/actions/listActions'

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: {}
    }
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

  addList() {
    this.props.dispatch(addListAsync(this.state.newList));
    this.setState({
      newList: {
        id: '',
        listName: '',
        dateCreated: '',
        items: []
      }
    })
  }

  render() {
    console.log('aside?', this.props.lists, this.state)
    return(
      <aside>
        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists 
            ? <div className="list-group">
                {Object.entries(this.props.lists).map(([key, value]) => (
                  <p onClick={() => this.props.dispatch(chooseList(value))} className="list-group-item list-group-item-secondary" key={value.id}>{value.listName}
                  <button type="button" className="btn btn-danger btn-sm btn-del"
                          onClick={() => this.props.dispatch(removeList(key))}
                          >x</button>
                  </p>
                ))}
              </div>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="row mt-4 mb-4 text-center">
        {this.props.lists 
          ? <input className="form-control" type="text" placeholder="Enter New ToDo List Title" 
            onChange={(event) => this.onNewListName(event)}/>
          : null}
          <button disabled={!this.state.newList.listName} onClick={() => this.addList()} 
            className="btn btn-primary mt-4">addListAsync</button>
        </div>
      </aside>
    )
  }
}

export default connect()(Aside)