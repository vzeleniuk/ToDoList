import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';
import { addList } from '../store/actions/listActions';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
    this.state = {
      loading: true,
      newList: {}
    }
  }

  onHandleChange(e) {
    const id = Date.now();
    this.setState({
      newList: {
        id: id,
        listName: e.target.value,
        dateCreated: new Date().toISOString(id),
        items: []
      }
    })
  }

  addList() {
    this.props.addList(this.state.newList);
  }

  getListTodos(item) {
    this.props.callback(item);
  }

  render() {
    console.log('Aside render', this.props)
    return(
      <aside>
        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists.length > 1 
            ? <div className="list-group">
                {this.props.lists && this.props.lists.map((item) => (
                  <p onClick={() => this.getListTodos(item)} className="list-group-item list-group-item-secondary" key={item.key}>{item.value.listName}</p>
                ))}
              </div>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="row mt-4 mb-4 text-center">
        {this.props.lists.length > 1 
          ? <input className="form-control" 
            type="text"
            placeholder="Enter New ToDo List Title" 
            // value={this.state.listNameForm}
            onChange={(event) => this.onHandleChange(event)}/>
          : null}
          <button onClick={() => this.addList()} 
            className="btn btn-primary mt-4">Add List</button>
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
    addList: (list) => dispatch(addList(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)