// import { delay } from 'redux-saga'
// import { call, put, takeLatest } from 'redux-saga'
// import { getFirebase } from 'react-redux-firebase'

export function* helloSaga() {
  try {
    console.log('Hello Saga!')
  } catch(err) {
    console.log('Error in saga!', err)
  }  
}

export default function* rootSaga() {
  yield [
    helloSaga()
  ]
}
