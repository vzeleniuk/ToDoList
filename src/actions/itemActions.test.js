import { 
  fetchListAsync, 
  fetchListSuccess, 
  addTodoAsync, 
  addTodoSuccess, 
  removeTodoAsync, 
  setTodoCheckedAsync, 
  fetchListError, 
  addTodoError, 
  removeTodoError, 
  setTodoCheckedError } from './itemActions';

describe('itemActions', () => {
  describe('fetchListAsync', () => {
    const key = 'listKey';

    const result = fetchListAsync(key);
    it('fetches list by key', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('FETCH_LIST')
    })
    it('fetches list by key', () => {
      expect(result.payload).toEqual('listKey')
    })
  })

  describe('fetchListSuccess', () => {
    const chosenList = {};

    const result = fetchListSuccess(chosenList);
    it('fetches list object', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('FETCH_LIST_SUCCESS')
    })
    it('fetches list object', () => {
      expect(result.payload).toEqual(chosenList)
    })
  })

  describe('addTodoAsync', () => {
    const newTodo = {};
    const key = 'listKey';

    const result = addTodoAsync(newTodo, key);
    it('adds todo to database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('ADD_TODO_ASYNC')
    })
    it('adds newTodo to database via key', () => {
      expect(result.payload.key).toEqual('listKey');
      expect(result.payload.newTodo).toEqual(newTodo);
    })
  })

  describe('addTodoSuccess', () => {
    const listKey = 'listKey';
    const todoKey = 'todoKey';
    const addedTodo = {};

    const result = addTodoSuccess(listKey, todoKey, addedTodo);
    it('adds todo to store in case of successfull add to database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('ADD_TODO_SUCCESS')
    })
    it('adds todo to store', () => {
      expect(result.payload.listKey).toEqual('listKey');
      expect(result.payload.todoKey).toEqual('todoKey');
      expect(result.payload.addedTodo).toEqual(addedTodo);
    })
  })

  describe('removeTodoAsync', () => {
    const listKey = 'listKey';
    const todoKey = 'todoKey';

    const result = removeTodoAsync(listKey, todoKey);
    it('removes todo from database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('REMOVE_TODO_ASYNC')
    })
    it('removes todo from database', () => {
      expect(result.payload.listKey).toEqual('listKey');
      expect(result.payload.todoKey).toEqual('todoKey');
    })
  })

  describe('setTodoCheckedAsync', () => {
    const listKey = 'listKey';
    const todoKey = 'todoKey';
    const checked = true;

    const result = setTodoCheckedAsync(listKey, todoKey, checked);
    it('sets todo\'s completion status in database', () => {
      expect(result.type).toBeDefined()
      expect(result.type).toEqual('SET_TODO_CHECKED_ASYNC')
    })
    it('sets todo\'s completion status in database', () => {
      expect(result.payload.listKey).toEqual('listKey');
      expect(result.payload.todoKey).toEqual('todoKey');
      expect(result.payload.checked).toBeTruthy();
    })
  })
  
  describe('errors', () => {
    const error = 'error';
    const resultFetch = fetchListError(error);
    const resultAdd = addTodoError(error);
    const resultRemove = removeTodoError(error);
    const resultSet = setTodoCheckedError(error);

    it('catches fetchListError', () => {
      expect(resultFetch.type).toBeDefined()
      expect(resultFetch.type).toEqual('FETCH_LIST_ERROR')
      expect(resultFetch.payload).toEqual('error');
    })

    it('catches addTodoError', () => {
      expect(resultAdd.type).toBeDefined()
      expect(resultAdd.type).toEqual('ADD_TODO_FAILED')
      expect(resultAdd.payload).toEqual('error')
    })

    it('catches removeTodoError', () => {
      expect(resultRemove.type).toBeDefined()
      expect(resultRemove.type).toEqual('REMOVE_TODO_FAILED')
      expect(resultRemove.payload).toEqual('error')
    })
    it('catches setTodoCheckedError', () => {
      expect(resultSet.type).toBeDefined()
      expect(resultSet.type).toEqual('SET_TODO_CHECKED_ERROR')
      expect(resultSet.payload).toEqual('error')
    })
  })
})