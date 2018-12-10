import { 
  requestListsSuccess,
  requestListsError,
  chooseList,
  addListAsync,
  addListSuccess,
  addListError,
  removeList,
  removeListError
} from './listActions'

describe('listsActions', () => {
  describe('requestListsSuccess', () => {
    const lists = {};
    const result = requestListsSuccess(lists);

    it('saves lists to store', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('REQUEST_LISTS_SUCCESS')
      expect(result.payload).toEqual(lists)
    })
  })

  describe('chooseList', () => {
    const listKey = 'listKey'
    const result = chooseList(listKey);

    it('saves chosen list to store', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('CHOOSE_LIST')
      expect(result.payload).toEqual('listKey')
    })
  })

  describe('addListAsync', () => {
    const newList = {};
    const result = addListAsync(newList);

    it('adds new list to database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('ADD_LIST_ASYNC')
      expect(result.payload).toEqual(newList)
    })
  })

  describe('addListSuccess', () => {
    const addedList = {};
    const addedListKey = 'listKey';
    const result = addListSuccess(addedList, addedListKey);

    it('adds new list to store', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('ADD_LIST_SUCCESS')
      expect(result.payload.addedList).toEqual(addedList)
      expect(result.payload.addedListKey).toEqual('listKey')
    })
  })

  describe('removeList', () => {
    const listKey = 'listKey';
    const result = removeList(listKey);

    it('removes list from database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('REMOVE_LIST')
      expect(result.payload).toEqual('listKey')
    })
  })

  describe('errors', () => {
    const error = 'error';
    const resultFetch = requestListsError(error);
    const resultAdd = addListError(error);
    const resultRemove = removeListError(error);

    it('catches requestListsError', () => {
      expect(resultFetch.type).toBeDefined()
      expect(resultFetch.type).toEqual('REQUEST_LISTS_FAILED')
      expect(resultFetch.payload).toEqual('error');
    })

    it('catches addListError', () => {
      expect(resultAdd.type).toBeDefined()
      expect(resultAdd.type).toEqual('ADD_LIST_FAILED')
      expect(resultAdd.payload).toEqual('error')
    })

    it('catches removeListError', () => {
      expect(resultRemove.type).toBeDefined()
      expect(resultRemove.type).toEqual('REMOVE_LIST_ERROR')
      expect(resultRemove.payload).toEqual('error')
    })

  })
})