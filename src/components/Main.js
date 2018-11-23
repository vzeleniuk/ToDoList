import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('--Main constructor--', props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      // key: nextProps.list.key,
      listName: nextProps.list.listName,
      dateCreated: nextProps.list.dateCreated,
      items: [...nextProps.list.items]
    });
    console.log('--Main received new props--', nextProps.list);
  }

  // onChangeName() {
  // data.lists[this.listIndex].listName = 'New'
  // this.forceUpdate()
  // }

  onHandleChange(event) {
    this.setState({
      listName: event.target.value
    })
  }

  handleTodoText(e) {
    this.setState({ 
      text: e.target.value 
    });
  }

  handleAddTodo(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
    // this.addTodo()
  }

  // addTodo(newItem) {
  //   base.post(`lists/${this.state.key}/items`, {
  //     data: [...newItem]
  //   })
  //   .then(() => {
  //     Router.transitionTo('/');
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });
  //   console.log('--addTodo--', this.nextProps.list.key, newItem)
  // }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  todoCompleted(i) {
    if (this.state.items[i].checked) {
      this.state.items[i].checked = false;
    } else {
      this.state.items[i].checked = true;
    }
  }

  deleteItem(itemId) {
    const updatedArray = this.state.items.filter(item => {
      return item.id !== itemId;
    })
    this.setState({
      items: [...updatedArray]
    });
    console.log('--deleteItem?--', this.state.items);
  }

  render() {
    return(
      <main className="container-main">
        {this.state.listName 
          ? <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-12 col-md-12">
                  <h2 className="cover-heading mt-4 mb-4">{this.state.listName}</h2>
                  <p>Created: {this.state.dateCreated}</p>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 text-left">
                  <ul className="checkbox">
                    {this.state.items.map((item, i) => (
                      <li key={i}>
                          <input type="checkbox" id={item.id} onChange={() => this.todoCompleted(i)}
                                  checked={item.checked} onClick={this.handleClick}/> 
                          <label className="checkbox-label" htmlFor={item.id}> {item.text}</label>
                        <button type="button" className="btn btn-danger btn-sm btn-del" onClick={() => this.deleteItem(item.id)}>x</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          : <h2 className="mt-4">Choose your ToDoList</h2>}
        {this.state.listName
          ? <div className="row mt-4">
              <form onSubmit={(e) => this.handleAddTodo(e)}>
                <div className="form-group">
                  <label htmlFor="new-todo">Add more ToDo's</label>
                  <input className="form-control"
                    id="new-todo"
                    onChange={(e) => this.handleTodoText(e)}
                    value={this.state.text}/>
                  <button className="btn btn-primary" disabled={!this.state.text}>Add</button>
                </div>
              </form>
            </div>
          : null}
     
      <div className="row mt-4 mb-4">
        {this.state.listName 
          ? <input className="form-control" 
            type="text" 
            value={this.state.listName}
            onChange={(event) => this.onHandleChange(event)}/>
          : null}
          {/* <button onClick={() => this.onChangeName()} className="btn btn-primary mt-4">Change List Name</button> */}
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  listName: PropTypes.string,
  dateCreated: PropTypes.string,
  items: PropTypes.array,
  data: PropTypes.object,
  text: PropTypes.string
}