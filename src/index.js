import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from'redux-logger';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import fbConfigApp from './config/fbConfig';

const initialState = {}

const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(logger, thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfigApp)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
