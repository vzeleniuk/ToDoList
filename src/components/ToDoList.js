import React from 'react';
import PropTypes from 'prop-types';

export class ToDoList extends React.Component {
  constructor(props) {    
    super(props)
    this.state = {
      items: [...props.listItems],
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('--ToDoList State--', this.state.items);
  }

  // componentDidMount() {
  //   this.setState({
  //     items: [...props.listItems],
  //   });
  //   console.log('--Component received new props--');
  // }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      items: [...nextProps.listItems],
    });
    console.log('--ToDoList received new props--');
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  todoCompleted(i) {
    if (this.props.listItems[i].checked) {
      this.props.listItems[i].checked = false;
    } else {
      this.props.listItems[i].checked = true;
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
      <div className="col-12 col-md-12">
        <div className="row">
          <div className="col-12 col-md-12">
            <h2 className="cover-heading mt-4 mb-4">{this.props.listName}</h2>
            <p>Created: {this.props.dateCreated}</p>
          </div>
        </div>
        {/* <div className="row justify-content-md-center">
          <div className="col-12 col-md-8 text-left">
            <ul className="checkbox">
              {this.props.listItems.map((item, i) => (
                <li key={i}>
                    <input type="checkbox" id={item.id} onChange={() => this.todoCompleted(i)}
                            checked={item.checked} onClick={this.handleClick}/> 
                    <label className="checkbox-label" htmlFor={item.id}> {item.text}</label>
                  <button type="button" className="btn btn-danger btn-sm btn-del" onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

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
    )
  }
}

ToDoList.propTypes = {
  listItems: PropTypes.array,
  listName: PropTypes.string,
  dateCreated: PropTypes.string,
}
