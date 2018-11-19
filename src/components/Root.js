import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from './Main';
import { Aside } from './Aside';


export class Root extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-md-4 col-4">
            <aside>
              <Aside />
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
}