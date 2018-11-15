import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Aside } from './components/Aside';
import { Main } from './components/Main';
import { ToDoList} from './components/ToDoList';
import { Root } from './components/Root';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path={"/"} component={Root}>
            <Route path={"aside"} component={Aside}/>
            <Route path={"main/:id"} component={Main}>
              <Route path={"todo/:id"} component={ToDoList}/>
            </Route>
          </Route>
        </div>
      </BrowserRouter>
    )
  }
 
}

export default App;
