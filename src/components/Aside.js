import React from 'react';
import data from '../mock-ToDoLists.json';
import PropTypes from 'prop-types';
import { base } from './Firebase/firebase';
import { Pulse } from 'react-preloading-component';


export class Aside extends React.Component {
  constructor() {
    super();
    this.addList = this.addList.bind(this);
    this.state = {
      data: data.lists,
      loading: true,
      lists: []
    }
    console.log('Aside Lists State', this.state.lists, this.state.loading)
  }

  getLists() {
    return new Promise((resolve, reject) => {
      if (base) {
        resolve(
          this.listRef = base.syncState('lists', {
            context: this,
            state: 'lists',
            asArray: true
          })
        )
        console.log('Aside Lists in promise', this.state.lists, this.state.loading)
      } else {
        const reason = new Error('On maitenance');
          reject(reason);
      }
    })
  }

  componentDidMount() {
    this.getLists()
    .then(this.setState({loading: false}))
    .then(setTimeout(() => this.getLists(), 3000))
    .catch(error => console.log(error));
    console.log('Aside Lists in Mount', this.state.lists, this.state.loading)
  }

  addList(title) {
    const lists = {...this.state.lists};
    const id = Date.now()
    lists[id] = {
      id: id,
      title: title,
      chordpro: ''
    };
    this.setState({lists});
  }

  getContent(id) {
    this.props.callback(id);
  }

  componentWillUnmount() {
    console.log('Aside Lists -- Component Will UnMount', this.state.lists, this.state.loading)
    base.removeBinding(this.listRef);
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <h3>Loading</h3>
          <Pulse />
        </div>
      )
    }

    return(
      <aside>
        <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
        <div className="list-group">
          {this.state.data.map((name, i) => (
            <p onClick={() => this.getContent(name.id)} className="list-group-item list-group-item-secondary" key={i}>{name.listName}</p>))}
        </div>
        
        {this.state.lists 
        ? <p>Lists from Firebase: {this.state.lists.id}</p>
        : <p>Lists from Firebase: no data</p>}
        
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}