import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, 
  addListSuccess, addListError, removeListError } from '../actions/listActions';
import { fetchListSuccess, fetchListError } from '../actions/itemActions';
import fbConfigApp, { databaseRef } from '../config/fbConfig';

export function* fetchListsAsync() {
  try {
    yield put(requestLists());
    const lists = yield databaseRef.once('value').then(
      snap => snap.val())
    yield put(requestListsSuccess(lists));
  } catch (error) {
    yield put(requestListsError());
  }
}

export function* fetchListAsync(key) {
  try {
    const chosenList = yield fbConfigApp.database().ref(`/lists/${key.payload}`)
      .once('value')
      .then(snap => snap.val())
    yield put(fetchListSuccess(chosenList));
  } catch (error) {
    yield put(fetchListError());
  }
}

export function* addListAsync(newList) {
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

export function* removeList(key) {
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
    takeLatest('ADD_LIST_ASYNC', addListAsync),
    takeEvery('FETCH_LISTS', fetchListsAsync),
    takeEvery('FETCH_LIST', fetchListAsync),
    takeLatest('REMOVE_LIST', removeList)
  ])
}
