import { all } from 'redux-saga/effects';

import todoSagas from './todoSagas';
import listSagas from './listSagas';

export default function* rootSaga() {
    console.log('what');
    yield all([
        todoSagas(),
        listSagas()
    ])
  }