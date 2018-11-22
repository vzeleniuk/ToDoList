import React from 'react';
import data from '../mock-ToDoLists.json';
import PropTypes from 'prop-types';
import { base } from './Firebase/firebase'
// import { app } from './Firebase/firebase'


export class Aside extends React.Component {
  constructor() {
    super();
    this.addList = this.addList.bind(this);

    this.state = {
      data: data.lists,
      lists: {}
    }
    console.log('Aside Lists', this.state.lists)
  }

  // getData(values){
  //   let listsVal = values;
  //   let lists = this.listsVal
  //                     .keys()
  //                     .map(listKey => {
  //                         let cloned = this.clone(listsVal[listKey]);
  //                         cloned.key = listKey;
  //                         return cloned;
  //                     })
  //                     .value();
  //     this.setState({
  //       lists: [...lists]
  //     });
  // }

  componentDidMount() {
    this.listRef = base.syncState('lists', {
      context: this,
      state: 'lists'
    });
    console.log('Aside Lists', this.state.lists)
  }

  addList(title) {
    const lists = {...this.state.lists};
    const id = Date.now()
    lists[id] = {
      id: id,
      title: title,
      chordpro: ''
    };
    
  }

  getContent(id) {
    this.props.callback(id);
  }

  componentWillUnmount() {
    base.removeBinding(this.listRef);
  }

  render() {
    return(
      <aside>
        <h4 className="mt-4 mb-4 text-center">My TODOs</h4>
        <div className="list-group">
          {this.state.data.map((name, i) => (
            <p onClick={() => this.getContent(name.id)} className="list-group-item list-group-item-secondary" key={i}>{name.listName}</p>))}
        </div>
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}