import { listReducer } from './listReducer'

describe('listReducer', () => {
  describe('REQUEST_LISTS_SUCCESS', () => {
    const state = {
      lists: []
    }
    const lists = {
      lists: {
        keyOne: {listName: 'list one'},
        keyTwo: {listName: 'list two'}
      }
    }
    const action = {type: 'REQUEST_LISTS_SUCCESS', payload: lists}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {lists: {keyOne: {listName: 'list one'}, keyTwo: {listName: 'list two'}}}

    it('loads lists to state', () => {
      console.log(newState)
      expect(newState).toEqual(returnDeviceReducer)
    })
  })
  
  describe('CHOOSE_LIST', () => {
    const state = {}
    const key = 'selectedListKey'
    const action = {type: 'CHOOSE_LIST', payload: key}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {selectedListKey: 'selectedListKey'}

    it('selects list key and saves to store', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('ADD_LIST_SUCCESS', () => {
    const state = {
      lists: {
        keyOne: {listName: 'list one'},
        keyTwo: {listName: 'list two'}
      }
    }
    const addedListKey = 'keyThree';
    const addedList = {
      listName: 'list three'
    }
    const action = {type: 'ADD_LIST_SUCCESS', payload: {addedList, addedListKey}}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {lists: {
      keyOne: {listName: 'list one'}, 
      keyTwo: {listName: 'list two'}, 
      keyThree: {listName: 'list three'}}}

    it('adds new list to store via key in case of successfull add to database', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('FETCH_LIST_SUCCESS', () => {
    const state = {}
    const list = {listName: 'list one'}
    const action = {type: 'FETCH_LIST_SUCCESS', payload: list}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {selectedListData: {listName: 'list one'}}

    it('successfully fetches list via key from database and saves to store', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('ADD_TODO_SUCCESS', () => {
    const state = {
      lists: {
        keyOne: {
          listName: 'list one', 
          items: {
            todoKeyOne: {text: 'todoOne'}
          }
        },
      }
    }
    const listKey = 'keyOne';
    const todoKey = 'todoKeyTwo';
    const addedTodo = {
      text: 'todoTwo'
    }
    const action = {type: 'ADD_TODO_SUCCESS', payload: {listKey, todoKey, addedTodo}}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {
      lists: {
        keyOne: {
          listName: 'list one', 
          items: {
            todoKeyOne: {text: 'todoOne'},
            todoKeyTwo: {text: 'todoTwo'}
          }
        }
      }
    }

    it('adds new todo to list store via key in case of successfull add to database', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('REQUEST_LISTS_FAILED', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'REQUEST_LISTS_FAILED', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('ADD_LIST_FAILED', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'ADD_LIST_FAILED', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('REMOVE_LIST_FAILED', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'REMOVE_LIST_FAILED', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('ADD_TODO_ERROR', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'ADD_TODO_ERROR', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('REMOVE_TODO_ERROR', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'REMOVE_TODO_ERROR', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('SET_TODO_CHECKED_ERROR', () => {
    const state = {}
    const error = 'error'
    const action = {type: 'SET_TODO_CHECKED_ERROR', payload: error}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {error: true}

    it('returns error in case of request failed', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

  describe('REQUEST_LISTS', () => {
    const state = {}
    const action = {type: 'REQUEST_LISTS'}
    const newState = listReducer(state, action);
    const returnDeviceReducer = {}

    it('requests lists', () => {
      expect(newState).toEqual(returnDeviceReducer)
    })
  })

})