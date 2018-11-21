import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Root } from './components/Root';
import { User } from './components/User';

const App = () => (
  <Router>
    <div className="cover-container d-flex w-100 mx-auto flex-column page-wrapper">
      <Header />
      <Route exact path={'/'} component={Root} />
      <Route path={'/user'} component={User} />
    </div>
  </Router>
);


export default App;
