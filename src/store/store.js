import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducer from './reducers/rootReducer'
import fbConfigApp from '../config/fbConfig';
import rootSaga from '../sagas/sagas';

const initialState = {}
const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfigApp)
  )
)

sagaMiddleware.run(rootSaga);