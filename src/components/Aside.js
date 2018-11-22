import React from 'react';
import PropTypes from 'prop-types';
import { base } from './Firebase/firebase';
import { Pulse } from 'react-preloading-component';


export class Aside extends React.Component {
  constructor() {
    super();
    this.addList = this.addList.bind(this);
    this.state = {
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

  addList(title) {
    const lists = {...this.state.lists};
    const id = Date.now()
    lists[id] = {
      id: id,
      listName: title,
      dateCreated: new Date().toISOString(id),
      items: []
    };
    this.setState({lists});
  }

  getContent(item) {
    this.props.callback(item);
  }

  componentWillUnmount() {
    console.log('Aside Lists -- Component Will UnMount', this.state.lists, this.state.loading)
    base.removeBinding(this.listRef);
  }

  render() {
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
      </aside>
    )
  }
}

Aside.propTypes = {
  callback: PropTypes.func
}