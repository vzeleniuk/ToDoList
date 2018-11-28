import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getFirebase } from 'react-redux-firebase';
import { requestList, requestListSuccess, requestListError } from '../store/actions/listActions';

function* watchFetchList() {
  yield takeEvery('FETCHED_LIST', fetchListAsync);
}

function* fetchListAsync() {
  try {
    yield put(requestList());
    const data = yield call(() => {
      return getFirebase('lists')
              .then(res => res.json())
      }
    );
    yield put(requestListSuccess(data));
  } catch (error) {
    yield put(requestListError());
  }
}

export function* helloSaga() {
  try {
    console.log('Hello Saga!')
  } catch(err) {
    console.log('Error in saga!', err)
  }  
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchFetchList()
  ]
}
