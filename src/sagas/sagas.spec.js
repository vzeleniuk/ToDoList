import { put } from 'redux-saga/effects';
import fetchListsAsync from './sagas';
import { databaseRef } from "../config/fbConfig";

test('fetchListsAsync Saga test', (assert) => {
  const gen = fetchListsAsync()

  assert.deepEqual(
    gen.next().value,
    put({ type: 'REQUEST_LISTS' }),
    'fetchListsAsync Saga must dispatch a REQUEST_LISTS action'
  )

  assert.deepEqual(
    gen.next().value,
    databaseRef.once('value').then(snap => snap.val()),
    'incrementAsync Saga must call Promise and return lists from Firebase'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'REQUEST_LISTS_SUCCESS' }),
    'fetchListsAsync Saga must dispatch a REQUEST_LISTS_SUCCESS action, get Promise result and set it to state'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'fetchListsAsync Saga must be done'
  )

  assert.end()
})