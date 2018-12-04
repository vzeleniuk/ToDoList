import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reactReduxFirebase } from 'react-redux-firebase'
import rootReducer from '../reducers/rootReducer'
import fbConfigApp from '../config/fbConfig';
import rootSaga from '../sagas/rootSaga';

const initialState = {}

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    reactReduxFirebase(fbConfigApp),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
)

sagaMiddleware.run(rootSaga);