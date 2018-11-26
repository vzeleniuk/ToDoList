import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { addTodo, removeTodo } from '../store/actions/itemActions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {},
      condition: false,
      id: '',
      listName: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // onChangeName() {
  // }

  handleNewTodo(e) {
    const id = Date.now();
    this.setState({
      newTodo: {
        id,
        text: e.target.value,
        checked: false
      }
    });
  }

  addTodo() {
    this.props.addTodo(this.state.newTodo, this.props.list.key);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  todoCompleted(i) {
    const newArr = this.objToArr();
    if (newArr[i].checked) {
      newArr[i].checked = false;
    } else {
      newArr[i].checked = true;
      // this.setState({
      //   id: this.props.list.value.items[i].id
      // })
      // console.log('todoCompleted', this.state.id)
    }
  }

  deleteTodo(i) {
    console.log('-id-', i, Object.keys(this.props.list.value.items));
    const keyTodo = Object.keys(this.props.list.value.items);
    console.log('-key of Todo for deletion-', keyTodo[i], this.props.list.key)
    this.props.removeTodo(keyTodo[i], this.props.list.key);
  }

  objToArr() {
    const objToArr = [];
    if (this.props.list && this.props.list.value.items) {
      Object.keys(this.props.list.value.items).forEach(key => {
        objToArr.push(this.props.list.value.items[key])
      })
    }
    return objToArr;
  }

  dateToFormat(date) {
    const d = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = d.getDate();
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }

  render() {
    const newArr = this.objToArr();
    return(
      <main className="container-main">
        {this.props.list 
          ? <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-12 col-md-12">
                  <h2 className="cover-heading mt-4 mb-4">{this.props.list.value.listName}</h2>
                  <p>Created: {this.dateToFormat(this.props.list.value.dateCreated)}</p>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 text-left">
                  {console.log('--new todo', this.props.list.value.items, newArr)}
                    {this.props.list.value.items && newArr
                      ? <ul className="checkbox">
                        {newArr.map((item, i) => (
                          <li key={i}>
                              <input type="checkbox" id={item.id} onChange={() => this.todoCompleted(i)}
                                      checked={item.checked} onClick={this.handleClick}/> 
                              <label className="checkbox-label" htmlFor={item.id}> {item.text}</label>
                            <button type="button" className="btn btn-danger btn-sm btn-del" 
                            onClick={() => this.deleteTodo(i)}
                            >x</button>
                          </li>))}
                        </ul>
                      : <p className="mt-4 text-center">Start edding ToDo's:</p>
                    } 
                </div>
              </div>
            </div>
          : <h2 className="mt-4">Choose your ToDoList</h2>}
        {this.props.list
          ? <div className="row mt-4">
              <form>
                <div className="form-group">
                  {this.props.list.value.items
                    ? <label htmlFor="new-todo">Add more ToDo's</label>
                    : <label htmlFor="new-todo">Add ToDo</label>
                  }
                  <input className="form-control"
                    id="new-todo"
                    onChange={(e) => this.handleNewTodo(e)}
                    />
                  <button className="btn btn-primary" disabled={!this.state.newTodo.text} 
                    onClick={() => this.addTodo()}>Add</button>
                </div>
              </form>
            </div>
          : null}
     
      {/* <div className="row mt-4 mb-4">
        {this.props.list 
          ? <input className="form-control" 
            type="text" 
            value={this.props.list.listName}
            onChange={(event) => this.onNewListName(event)}/>
          : null}
          <button onClick={() => this.onChangeName()} className="btn btn-primary mt-4">Change List Name</button>
        </div> */}
      </main>
    )
  }
}

Main.propTypes = {
  listName: PropTypes.string,
  dateCreated: PropTypes.string,
  items: PropTypes.array,
  text: PropTypes.string,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  lists: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    lists: state.firebase.ordered.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo, path) => dispatch(addTodo(todo, path)),
    removeTodo: (id, path) => dispatch(removeTodo(id, path))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(['lists'])
)(Main)