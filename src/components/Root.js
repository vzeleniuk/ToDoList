import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from '../mock-ToDoLists.json';
import { Main } from './Main';

export class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.lists,
    }
  }

  render() {
    return (
      <Router>
            <div className="row">
              <div className="col-md-4 col-4">
                <aside>
                  <h4 className="mt-4 mb-4">My TODOs</h4>
                  <div className="list-group">
                    {this.state.data.map((item, i) =><Link to={`/${item.id}`} className="list-group-item list-group-item-secondary" key={i}>{item.listName}</Link>)}
                  </div>
                </aside> 
              </div>
              <div className="col-md-8 col-8">
                <Route 
                  exact
                  path={"/"}
                  render={() => <h3 className="cover-heading mt-4 mb-4 text-center">Choose your ToDoList</h3>}/>
                <Route path={"/:id"} component={Main}/>
              </div>
            </div>

      </Router>
    );
  }
}

Root.propTypes = {
  listName: PropTypes.string,
  dateCreated: PropTypes.string,
  items: PropTypes.array,
  data: PropTypes.object,
  children: PropTypes.element.isRequired,
}