import itemReducer from './itemReducer';
import listReducer from './listReducer';
import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    item: itemReducer,
    list: listReducer,
    firebase: firebaseStateReducer
})

export default rootReducer;