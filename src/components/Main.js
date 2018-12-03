import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoAsync, removeTodoAsync } from '../store/actions/itemActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {},
      itemsFormProps: [],
      condition: false
    }
    this.handleChecked = this.handleChecked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list) {
      this.setState({
        itemsFormProps: nextProps.list[1].items,
      })
    }
    console.log('Main Did Mount', this.state.itemsFormProps)
  }

  handleNewTodo(e) {
    this.setState({
      newTodo: {
        id: Date.now(),
        text: e.target.value,
        checked: false
      }
    });
  }

  addTodoAsync() {
    this.props.dispatch(addTodoAsync(this.state.newTodo, this.props.list[0]));
    this.setState({
      newTodo: { id: '', text: '', checked: false }
    })
  }

  handleChecked() {
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
    }
  }

  deleteTodo(i) {
    const keyTodo = Object.keys(this.props.list[1].items);
    this.props.dispatch(removeTodoAsync(this.props.list[0], keyTodo[i]));
    console.log('delete todo in Main', this.props.list[0], keyTodo[i])
  }

  objToArr() {
    const objToArr = [];
    if (this.props.list && this.props.list[1].items) {
      Object.keys(this.props.list[1].items).forEach(key => {
        objToArr.push(this.props.list[1].items[key])
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
    console.log('MAIN', this.props, this.state.itemsFormProps);
    const newArr = this.objToArr();
    return(
      <main className="container-main">
        {this.props.list 
          ? <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-12 col-md-12">
                  <h2 className="cover-heading mt-4 mb-4">{this.props.list[1].listName}</h2>
                  <p className="h5">Created: {this.dateToFormat(this.props.list[1].dateCreated)}</p>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 text-left">
                    {this.props.list[1].items && newArr
                      ? <ul className="checkbox">
                        {newArr.map((item, i) => (
                          <li key={i}>
                              <input type="checkbox" id={item.id} onChange={() => this.todoCompleted(i)}
                                checked={item.checked} onClick={this.handleChecked}/> 
                              <label className="checkbox-label" htmlFor={item.id}> {item.text}</label>
                            <button type="button" className="btn btn-danger btn-sm btn-del btn-todo" 
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
                  {this.props.list[1].items
                    ? <label htmlFor="new-todo">Add more ToDo's</label>
                    : <label htmlFor="new-todo">Add ToDo</label>
                  }
                  <input className="form-control" id="new-todo" placeholder="What needs to be done?"
                    onChange={(e) => this.handleNewTodo(e)}
                    />
                  <button className="btn btn-primary" disabled={!this.state.newTodo.text} 
                    onClick={() => this.addTodoAsync()}>Add Todo</button>
                </div>
              </form>
            </div>
          : null}
      </main>
    )
  }
}

Main.propTypes = {
  lists: PropTypes.array,
  list: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    list: state.list.selectedList
  }
}

export default connect(mapStateToProps)(Main)