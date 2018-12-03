import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, addListSuccess, addListError, removeListError } from '../store/actions/listActions';
import { addTodoSuccess, addTodoError, removeTodoSuccess, removeTodoError } from '../store/actions/itemActions';
import fbConfigApp, { databaseRef } from "../config/fbConfig";

function* watchFetchLists() {
  yield takeEvery('FETCH_LISTS', fetchListsAsync);
}

function* fetchListsAsync() {
  try {
    yield put(requestLists());
    const lists = yield databaseRef.once('value').then(
      snap => snap.val())
      console.log(lists)
    yield put(requestListsSuccess(lists));
  } catch (error) {
    yield put(requestListsError());
  }
}

function* watchAddList() {
  yield takeLatest('ADD_LIST_ASYNC', addListAsync);
}

function* addListAsync(newList) {
  console.log('addListAsync', newList.payload);
  try {
    const newListRef = yield getFirebase().push('lists', newList.payload);
    const addedList = yield fbConfigApp.database().ref(`/lists/${newListRef.key}`)
      .once('value')
      .then(snap => snap.val())
    yield put(addListSuccess(addedList, newListRef.key));
  } catch (error) {
    yield put(addListError(error));
  }
}

function* watchRemoveList() {
  yield takeLatest('REMOVE_LIST', removeList);
}

function* removeList(key) {
  console.log('remove saga', key.payload);
  try {
    yield fbConfigApp.database().ref('lists')
      .child(key.payload)
      .remove();
    yield fetchListsAsync();
  } catch (error) {
    yield put(removeListError(error))
  }
}

function* watchAddTdo() {
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
  console.log('remove TODO saga', key.payload.listKey, key.payload.todoKey);
  try {
    yield fbConfigApp.database().ref(`/lists/${key.payload.listKey}/items/`)
      .child(key.payload.todoKey)
      .remove();
    yield put(removeTodoSuccess(key.payload.listKey, key.payload.todoKey));
  } catch (error) {
    yield put(removeTodoError(error));
  }
}

export default function* rootSaga() {
  yield all([
    watchAddList(),
    watchFetchLists(),
    watchRemoveList(),
    watchAddTdo(),
    watchRemoveTodo()
  ])
}
