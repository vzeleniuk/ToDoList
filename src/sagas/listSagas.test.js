import { call, take, put } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { push } from 'react-router-redux'
import { 
  requestListsSuccess,
  requestListsError,
  chooseList,
  addListAsync,
  addListSuccess,
  addListError,
  removeList,
  removeListError
} from '../actions/listActions'

import { 
  fetchListsAsync,
  fetchListAsync,
  addListAsync,
  removeList,
 } from './listSagas'

import { listReducer } from '../reducers/listReducer'

describe('list saga', () => {
  describe('fetch lists from database', () => {

    it('test fetchListsAsync using saga - SUCCESS FLOW', () => {
      return expectSaga(fetchListsAsync, { type: 'test', payload: 'adg' })
        .withReducer(listReducer)
        .provide([
          [
            call(CareTypeService.fetchGeneralSettings, 'adg'),
            {
              id: 42,
              name: 'John Doe',
              generalSettings: { basicInfusionAdvisoryMessage: 'test' }
            }
          ]
        ])
        .put({
          type: CareTypeActions.FETCH_SETTINGS_SUCCESS,
          payload: {
            id: 42,
            name: 'John Doe',
            generalSettings: { basicInfusionAdvisoryMessage: 'test' }
          }
        })
        .hasFinalState({
          ...initialState,
          isLoading: false,
          careTypeGeneralSettings: {
            id: 42,
            name: 'John Doe',
            generalSettings: { basicInfusionAdvisoryMessage: 'test' }
          },
          newInfusionMessage: 'test',
          savedInfusionMessage: 'test'
        })
        .run()
    })
  })
})