import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers/rootReducer';
import fbConfigApp from '../config/fbConfig';

const initialState = {}

export default createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfigApp)
  )
)