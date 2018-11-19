import React from 'react';
import PropTypes from 'prop-types';

export class ToDoList extends React.Component {
  render() {
    return(
      <div>
        <h1 className="cover-heading mt-4 mb-4">{this.props.listName}</h1>
        <p>Created: {this.props.dateCreated}</p>
        <div className="text-left">
          <ul>
            {this.props.listItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

ToDoList.propTypes = {
  listItems: PropTypes.array,
  listName: PropTypes.string,
  dateCreated: PropTypes.string,
}
