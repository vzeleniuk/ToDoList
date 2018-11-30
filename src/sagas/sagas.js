import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, addListSuccess, addListError, removeListError, removeListSuccess } from '../store/actions/listActions';
import fbConfigApp, { databaseRef } from "../config/fbConfig";

function* watchFetchLists() {
  yield takeEvery('FETCH_LISTS', fetchListsAsync);
}

function* fetchListsAsync() {
  try {
    yield put(requestLists());
    const lists = yield databaseRef.once('value').then(
      snap => snap.val())
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
  console.log('remone saga', key.payload);
  try {
    yield fbConfigApp.database().ref('lists').child(key.payload).remove();
    yield put(removeListSuccess(key.payload));
  } catch (error) {
    yield put(removeListError(error))
  }

}

function* watchAddTdo() {
  yield takeLatest('ADD_TODO_ASYNC', addTodoAsync);
}

function* addTodoAsync(newTodo) {
  console.log('addListAsync', newTodo.payload);
  try {
    const newTodoRef = yield getFirebase().push('lists', newTodo.payload);
    const addedTodo = yield fbConfigApp.database().ref(`/lists/${newTodoRef.key}`)
      .once('value')
      .then(snap => snap.val())
    yield put(addListSuccess(addedTodo, newTodoRef.key));
  } catch (error) {
    yield put(addListError(error));
  }
}

export default function* rootSaga() {
  yield all([
    watchAddList(),
    watchFetchLists(),
    watchRemoveList(),
    watchAddTdo()
  ])
}
