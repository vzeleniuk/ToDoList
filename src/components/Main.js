import React from 'react';
import PropTypes from 'prop-types';
import data from '../mock-ToDoLists.json';


// import ToDoList from './ToDoList';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  };

  // onChangeName() {
  //   this.props.listData.listName(this.state.listName);
  // };

  // onNameChange(event) {
  //   this.setState({
  //     listName: event.target.value
  //   })
  // }

  render() {
    return(
      <main className="container-main">
      {this.props.children}
      <h1 className="cover-heading mt-4 mb-4">{this.state.data[0].listName}</h1>
        <p>Created: {this.state.data[0].dateCreated}</p>
        <div className="text-left">
        {/* {this.state.data.map((list) => list.items.map((item, i) =><li key={i}>{item}</li>))} */}
        {console.log('--Main ID--', this.props)}
        {/* <p>The ID: {this.props.params.id}</p> */}
            {/* <ul>
              {this.props.listData.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul> */}
          {/* <div className="row mb-4">
            <input type="text" value={this.state.listName} onChange={(event) => this.onNameChange(event)}/>
            <button onClick={() => this.onChangeName()} className="btn btn-primary">Change List Name</button>
          </div> */}
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
  children: PropTypes.element.isRequired,
}