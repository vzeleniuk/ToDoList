import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      condition: false,
      id: ''
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('--Main constructor--', props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.lists) {
  //     if (nextProps.list.items) {
  //       this.setState({
  //         // key: nextProps.list.key,
  //         listName: nextProps.list.listName,
  //         dateCreated: nextProps.list.dateCreated,
  //         items: [...nextProps.list.items]
  //       })
  //     } else {
  //       this.setState({
  //         // key: nextProps.list.key,
  //         listName: nextProps.list.listName,
  //         dateCreated: nextProps.list.dateCreated,
  //         items: []
  //       })
  //     }
  //   } else  {console.log('--no data--'); return null}
  // }

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
    if (this.props.list.value.items[i].checked) {
      this.props.list.value.items[i].checked = false;
    } else {
      this.props.list.value.items[i].checked = true;
      this.setState({
        id: this.props.list.value.items[i].id
      })
      console.log('todoCompleted', this.state.id)
    }
  }

  // deleteItem(itemId) {
  //   const updatedArray = this.props.list.items.filter(item => {
  //     return item.id !== itemId;
  //   })
  //   this.setState({
  //     items: [...updatedArray]
  //   });
  //   console.log('--deleteItem?--', this.props.list.items);
  // }

  render() {
    console.log('--props list--', this.props.list)
    return(
      <main className="container-main">
        {this.props.list 
          ? <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-12 col-md-12">
                  <h2 className="cover-heading mt-4 mb-4">{this.props.list.value.listName}</h2>
                  <p>Created: {this.props.list.value.dateCreated}</p>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 text-left">
                  <ul className="checkbox">
                    {this.props.list.value.items
                      ? this.props.list.value.items.map((item, i) => (
                        <li key={i}>
                            <input type="checkbox" id={item.id} onChange={() => this.todoCompleted(i)}
                                    checked={item.checked} onClick={this.handleClick}/> 
                            <label className="checkbox-label" htmlFor={item.id}> {item.text}</label>
                          <button type="button" className="btn btn-danger btn-sm btn-del" onClick={() => this.deleteItem(item.id)}>x</button>
                        </li>))
                      : <p className="mt-4 text-center">Start edding ToDo's:</p>
                    }
                  </ul> 
                </div>
              </div>
            </div>
          : <h2 className="mt-4">Choose your ToDoList</h2>}
        {this.props.list
          ? <div className="row mt-4">
              <form onSubmit={(e) => this.handleAddTodo(e)}>
                <div className="form-group">
                  {this.props.list.value.items
                    ? <label htmlFor="new-todo">Add more ToDo</label>
                    : <label htmlFor="new-todo">Add ToDo</label>
                  }
                  <input className="form-control"
                    id="new-todo"
                    onChange={(e) => this.handleTodoText(e)}
                    value={this.state.text}/>
                  <button className="btn btn-primary" disabled={!this.state.text}>Add</button>
                </div>
              </form>
            </div>
          : null}
     
      {/* <div className="row mt-4 mb-4">
        {this.props.list 
          ? <input className="form-control" 
            type="text" 
            value={this.props.list.listName}
            onChange={(event) => this.onHandleChange(event)}/>
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
  data: PropTypes.object,
  text: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    lists: state.firebase.ordered.lists
  }
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect((props, state) => {
    if (props.list && state.id !== undefined) {console.log('firebaseConnect', props.list.key);
    props.list.value.items.map(
        (todo, i) =>
          todo.id === state.id 
          ? console.log('firebaseConnect MAP', props.list.value.items[i])
          : null
      )
      return [
        { path: `lists/${props.list.key}/items` }
      ]
    }
  })
  )(Main)