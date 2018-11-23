import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pulse } from 'react-preloading-component';

import { base } from '../config/fbConfig';
import { addList } from '../store/actions/listActions'


class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
    this.state = {
      loading: true,
      lists: [], 
      newList: {}
    }
    console.log('Aside Lists State', this.state.lists, this.state.loading)
  }

  getLists() {
    return new Promise((resolve, reject) => {
      if (base) {
        resolve(
          this.listRef = base.listenTo('lists', {
            context: this,
            state: 'lists',
            asArray: true,
            then(lists){
              this.setState({lists});
            }
          })
        )
      } else {
        const reason = new Error('On maitenance');
          reject(reason);
      }
    })
  }

  componentDidMount() {
    this.getLists()
    .then(this.setState({loading: false}))
    .catch(error => console.log(error));
    console.log('Aside Lists in Mount', this.state.lists, this.state.loading)
  }

  onHandleChange(e) {
    const id = Date.now();
    this.setState({
      newList: {
        id: id,
        listName: e.target.value,
        dateCreated: new Date().toISOString(id),
        items: []
      }
    })
  }

  addList() {
    this.props.addList(this.state.newList);
    console.log('Add New List', this.state.newList);
  }

  getContent(item) {
    this.props.callback(item);
  }

  componentWillUnmount() {
    console.log('Aside Lists -- Component Will UnMount', this.state.lists, this.state.loading)
    base.removeBinding(this.listRef);
  }

  render() {
    console.log(this.props.lists);

    return(
      <aside>
        <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
        {this.state.lists.length > 1 
          ? <div className="list-group">
              {this.state.lists.map((item, i) => (
                <p onClick={() => this.getContent(item)} className="list-group-item list-group-item-secondary" key={i}>{item.listName}</p>))}
            </div>
          : <div className="row mt-6">
              <Pulse />
            </div>}

        <div className="mt-6">
          <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
          {this.props.lists.length > 1 
            ? <div className="list-group">
                {this.props.lists.map((item) => (
                  <p onClick={() => this.getContent(item)} className="list-group-item list-group-item-secondary" key={item.id}>{item.listName}</p>))}
              </div>
            : <div className="row mt-6">
                <Pulse />
              </div>}
        </div>
        
        <div className="row mt-4 mb-4 text-center">
        {this.state.lists 
          ? <input className="form-control" 
            type="text"
            placeholder="Enter New ToDo List Title" 
            value={this.state.listNameForm}
            onChange={(event) => this.onHandleChange(event)}/>
          : null}
          <button onClick={() => this.addList()} 
            className="btn btn-primary mt-4">Add List</button>
        </div>
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    lists: state.list.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)