import React from 'react';
import PropTypes from 'prop-types';
import data from '../mock-ToDoLists.json';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  }

  onChangeName() {
    this.props.listData.listName(this.state.listName);
  };

  onNameChange(event) {
    this.setState({
      listName: event.target.value
    })
  }

  render() {
    return(
      <main className="container-main">
      <h1 className="cover-heading mt-4 mb-4">{this.state.data[this.props.match.params.id-1].listName}</h1>
      {console.log('--List Title--', this.props.match.params.id)}
        <p>Created: {this.state.data[this.props.match.params.id-1].dateCreated}</p>
        <div className="text-left">
            <ul>
              {this.state.data[this.props.match.params.id-1].items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          <div className="row mb-4">
            <input type="text" value={this.state.data[this.props.match.params.id-1].listName} onChange={(event) => this.onNameChange(event)}/>
            <button onClick={() => this.onChangeName()} className="btn btn-primary">Change List Name</button>
          </div>
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