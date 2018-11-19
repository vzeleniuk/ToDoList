import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Root } from './components/Root'
import { Header } from './components/Header';
import { User } from './components/User';

class App extends Component {
  render() {
    return(
        <div className="cover-container d-flex w-100 mx-auto flex-column page-wrapper">
          <Header/>
          <div className="container">
            <Route exact path="/" component={Root}/>
            <Route path="/user" component={User}/>
          </div>
        </div>
    )
  }
}

export default App;
