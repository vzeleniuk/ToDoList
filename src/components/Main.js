import React from 'react';
import PropTypes from 'prop-types';
import data from '../mock-ToDoLists.json';
import { ToDoList } from './ToDoList';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: true
    }
    console.log('--Within constructor--', props, window.location.pathname);
  }

  componentDidMount() {
    const listIndex = data.lists.map(item => item.id).indexOf(parseInt(this.props.match.params.id, 10));
    this.setState({
      data: data.lists,
      listName: data.lists[listIndex].listName,
      dateCreated: data.lists[listIndex].dateCreated,
      items: [...data.lists[listIndex].items]
    });
    setTimeout(() => this.setState({ loading: false }), 500);
    console.log('--Component did mount--', this.props, listIndex);
  }

  componentWillReceiveProps(nextProps) {
    this.listIndex = data.lists.map(item => item.id).indexOf(parseInt(nextProps.match.params.id, 10));
    this.setState({
      data: data.lists,
      listName: data.lists[this.listIndex].listName,
      dateCreated: data.lists[this.listIndex].dateCreated,
      items: [...data.lists[this.listIndex].items]
    });
    setTimeout(() => this.setState({ loading: false }), 500);
    console.log('--Component received new props--');
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

  handleChange(e) {
    this.setState({ 
      text: e.target.value 
    });
  }

  handleSubmit(e) {
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
    }));

  }

  render() {
    const { loading } = this.state;
    
    if(loading) { 
      return null;
    }

    return(
      <main className="container-main">
        {this.state.data ? <ToDoList 
                            listName={this.state.listName}
                            dateCreated={this.state.dateCreated}
                            listItems={this.state.items}/> 
                            : null}
      <div className="row mt-4">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="new-todo">
              Add more ToDo's
            </label>
            <input className="form-control"
              id="new-todo"
              onChange={(e) => this.handleChange(e)}
              value={this.state.text}
            />
            <button className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>

        <div className="row mt-4 mb-4">
          {this.state.data ? <input className="form-control" 
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