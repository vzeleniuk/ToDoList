import { all, put, takeLatest } from 'redux-saga/effects';
import { addTodoSuccess, addTodoError, removeTodoError, setTodoCheckedError } from '../actions/itemActions';
import fbConfigApp from "../config/fbConfig";


function* watchAddTodo() {
  yield takeLatest('ADD_TODO_ASYNC', addTodoAsync);
}
function* addTodoAsync(newTodo) {
  try {
    const newTodoRef = yield fbConfigApp.database().ref(`/lists/${newTodo.payload.key}/`)
      .child('items')
      .push(newTodo.payload.newTodo);
    const addedTodo = yield fbConfigApp.database().ref(`/lists/${newTodo.payload.key}/items/${newTodoRef.key}`)
      .once('value')
      .then(snap => snap.val())
    yield put(addTodoSuccess(newTodo.payload.key, newTodoRef.key, addedTodo));
  } catch (error) {
    yield put(addTodoError(error));
  }
}

function* watchRemoveTodo() {
  yield takeLatest('REMOVE_TODO_ASYNC', removeTodoAsync);
}
function* removeTodoAsync(key) {
  try {
    yield fbConfigApp.database().ref(`/lists/${key.payload.listKey}/items/`)
      .child(key.payload.todoKey)
      .remove(); 
  } catch (error) {
    yield put(removeTodoError(error));
  }
}

function* watchSetTodoChecked() {
  yield takeLatest('SET_TODO_CHECKED_ASYNC', setTodoCheckedAsync);
}
function* setTodoCheckedAsync(checkTodo) {
  try {
    yield fbConfigApp.database().ref(`/lists/${checkTodo.payload.listKey}/items/`)
      .child(checkTodo.payload.todoKey)
      .update({checked: checkTodo.payload.checked});
  } catch (error) {
    yield put(setTodoCheckedError(error))
  }
}

export default function* todoSagas() {
  yield all([
    watchAddTodo(),
    watchRemoveTodo(),
    watchSetTodoChecked()
  ])
}
