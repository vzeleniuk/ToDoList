import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';
import { addList, removeList, addListAsync } from '../store/actions/listActions';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
    this.state = {
      loading: true,
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
    this.props.addList(this.state.newList);
  }

  addListAsync() {
    this.props.addListAsync(this.state.newList);
  }

  deleteList(path) {
    this.props.removeList(path);
  }

  getListTodos(item) {
    this.props.callback(item);
  }

  render() {
    return(
      <aside>
        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists.length > 1 
            ? <div className="list-group">
                {this.props.lists && this.props.lists.map((item) => (
                  <p onClick={() => this.getListTodos(item)} className="list-group-item list-group-item-secondary" key={item.key}>{item.value.listName}
                  <button type="button" className="btn btn-danger btn-sm btn-del" 
                          onClick={() => this.deleteList(item.key)}
                          >x</button>
                  </p>
                ))}
              </div>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="row mt-4 mb-4 text-center">
        {this.props.lists.length > 1 
          ? <input className="form-control" type="text" placeholder="Enter New ToDo List Title" 
            onChange={(event) => this.onNewListName(event)}/>
          : null}
          <button disabled={!this.state.newList.listName} onClick={() => this.addList()} 
            className="btn btn-primary mt-4">Add List</button>
          <button disabled={!this.state.newList.listName} onClick={() => this.addListAsync()} 
            className="btn btn-primary mt-4">addListAsync</button>
        </div>
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    lists: state.firebase.ordered.lists,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list)),
    removeList: (path) => dispatch(removeList(path)),
    addListAsync: (list) => dispatch(addListAsync(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)