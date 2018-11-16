import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Root } from './components/Root'
import { User } from './components/User';
import { Header } from './components/Header';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="cover-container d-flex w-100 mx-auto flex-column page-wrapper">
          <Header/>
          <div className="container">
            <Route exact path="/" component={Root}/>
            <Route path="/user" component={User}/>
          </div>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
