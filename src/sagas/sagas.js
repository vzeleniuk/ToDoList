import { all, put, takeEvery } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, addListSuccess, addListError } from '../store/actions/listActions';
import fbConfigApp, { databaseRef } from "../config/fbConfig";

function* watchAddList() {
  yield takeEvery('ADD_LIST_ASYNC', addListAsync);
}

function* addListAsync(newList) {
  console.log('addListAsync', newList.payload)
  try {
    const newListRef = yield getFirebase().push('lists', newList.payload)
    const addedList = yield fbConfigApp.database().ref(`/lists/${newListRef.key}`)
      .once('value')
      .then(snap => snap.val())
    yield put(addListSuccess(addedList, newListRef.key));
  } catch (error) {
    yield put(addListError(error));
  }
}

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

export default function* rootSaga() {
  yield all([
    watchAddList(),
    watchFetchLists()
  ])
}
