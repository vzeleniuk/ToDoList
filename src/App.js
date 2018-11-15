import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Root } from './components/Root'
import { Aside } from './components/Aside';
import { Main } from './components/Main';
import { ToDoList} from './components/ToDoList';
import { User } from './components/User';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Root}/>
          
          <Route path="/:id" component={ToDoList}/>
          <Route path="/user" component={User}/>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
