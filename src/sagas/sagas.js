import { all, call, take, put, takeEvery } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestLists, requestListsSuccess, requestListsError, addList, addListSuccess, addListError } from '../store/actions/listActions';
import { databaseRef } from "../config/fbConfig";

function* watchAddList() {
  yield takeEvery('ADD_LIST_ASYNC', addListAsync);
}

function* addListAsync(list) {
  console.log(list)
  try {
    // yield put(addList(list));
    const firebase = getFirebase();
    firebase.push('lists', list.list)
    yield getFirebase().ref()
    // yield put(addListSuccess());
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
      snap => snap.val()
    )
    console.log('inside saga', lists)
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
