import React from 'react';
import PropTypes from 'prop-types';

export class ToDoList extends React.Component {
  render() {
    return(
      <div className="col-12 col-md-12">
        <div className="row">
          <div className="col-12 col-md-12">
            <h2 className="cover-heading mt-4 mb-4">{this.props.listName}</h2>
            <p>Created: {this.props.dateCreated}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 text-left">
            <ul>
              {this.props.listItems.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
          </div>
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
