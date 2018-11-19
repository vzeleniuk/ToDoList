import React from 'react';
import data from '../mock-ToDoLists.json';
import { ToDoList } from './ToDoList';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
      listName: ''
    }
    // console.log('--List Title--', this.state.listName)
  }

  // onChangeName() {
  //   this.setState({
  //     listName: event.target.value
  //   })
  // }

  onHandleChange(event) {
    this.setState({
      listName: event.target.value
    })
  }

  render() {
    const listIndex =  this.state.data.map(item => item.id).indexOf(parseInt(this.props.match.params.id));
    // const listName = this.state.data[listIndex].listName;
    console.log('--List Title Rendered--', this.props.match.params.id, this.state.listName);
    
    return(
      <main className="container-main">
        <ToDoList 
                listName={this.state.data[listIndex].listName}
                dateCreated={this.state.data[listIndex].dateCreated}
                listItems={this.state.data[listIndex].items}
                />
        <div className="row mb-4">
            <input type="text" 
                  value={this.state.data[listIndex].listName}
                  onChange={(event) => this.onHandleChange(event)}/>
            <button onClick={() => this.onChangeName()} className="btn btn-primary">Change List Name</button>
          </div>
      </main>
    )
  }
}

// Main.propTypes = {
//   listName: PropTypes.string,
//   dateCreated: PropTypes.string,
//   items: PropTypes.array,
//   data: PropTypes.object,
// }