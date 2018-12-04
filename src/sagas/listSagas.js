import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, 
  addListSuccess, addListError, removeListError } from '../actions/listActions';
import { fetchListSuccess, fetchListError } from '../actions/itemActions';
import fbConfigApp, { databaseRef } from '../config/fbConfig';

function* watchFetchLists() {
  console.log('man');
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

function* watchFetchList() {
  yield takeEvery('FETCH_LIST', fetchListAsync);
}
function* fetchListAsync(key) {
  try {
    const chosenList = yield fbConfigApp.database().ref(`/lists/${key.payload}`)
      .once('value')
      .then(snap => snap.val())
    yield put(fetchListSuccess(chosenList));
  } catch (error) {
    yield put(fetchListError());
  }
}

function* watchAddList() {
  yield takeLatest('ADD_LIST_ASYNC', addListAsync);
}
function* addListAsync(newList) {
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
  try {
    yield fbConfigApp.database().ref('lists')
      .child(key.payload)
      .remove();
    yield fetchListsAsync();
  } catch (error) {
    yield put(removeListError(error))
  }
}

export default function* listSaga() {
  yield all([
    watchAddList(),
    watchFetchLists(),
    watchFetchList(),
    watchRemoveList()
  ])
}
