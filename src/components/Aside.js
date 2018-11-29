import React from 'react';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';
import { chooseList, addListAsync, removeList } from '../store/actions/listActions'

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: {}
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log('Should?', this.props, nextProps)
  //   if (this.props === nextProps) {
  //     return true;
  //   }
  //   return false;
  // }

  onNewListName(e) {
    const id = Date.now();
    this.setState({
      newList: {
        id,
        listName: e.target.value,
        dateCreated: new Date().toISOString(id),
        items: []
      }
    })
  }

  objToArr() {
    const objToArr = [];
    if (this.props.lists) {
      Object.keys(this.props.lists).forEach(key => {
        objToArr.push(this.props.lists[key])
      })
    }
    return objToArr;
  }

  render() {
    console.log('aside?', this.props.lists)
    const newArr = this.objToArr();
    return(
      <aside>
        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists 
            ? <div className="list-group">
                {this.props.lists && newArr.map((item) => (
                  <p onClick={() => this.props.dispatch(chooseList(item))} className="list-group-item list-group-item-secondary" key={item.id}>{item.listName}
                  <button type="button" className="btn btn-danger btn-sm btn-del" 
                          onClick={() => this.props.dispatch(removeList(item.key))}
                          >x</button>
                  </p>
                ))}
              </div>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="row mt-4 mb-4 text-center">
        {this.props.lists 
          ? <input className="form-control" type="text" placeholder="Enter New ToDo List Title" 
            onChange={(event) => this.onNewListName(event)}/>
          : null}
          <button disabled={!this.state.newList.listName} onClick={() => this.props.dispatch(addListAsync(this.state.newList))} 
            className="btn btn-primary mt-4">addListAsync</button>
        </div>
      </aside>
    )
  }
}

export default connect()(Aside)