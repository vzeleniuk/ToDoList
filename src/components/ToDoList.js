import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export class ToDoList extends React.Component {
  constructor(props) {    
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  todoCompleted(i) {
    console.log('--todoCompleted--',this.props.listItems, '--i--', i);
    if(!this.props.listItems[i].checked){
      this.props.listItems[i].checked = true;
    }
    else {
      this.props.listItems[i].checked = false;
    }
  };

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
            <CheckboxGroup
              className="checkbox"
              checkboxDepth={2}
              name="listItems">
              {this.props.listItems.map((item, i) => <label key={i} onChange={() => this.todoCompleted(i)} 
                checked={item.checked} 
                onClick={ this.handleClick}
                className={this.state.condition ? "line" : null }>
                <Checkbox value={item.text}/>{item.text}</label>)}
              {console.log('--Clicked Item--', this.props.listItems, this.state.condition )}
            </CheckboxGroup>
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
