export const fetchListAsync = (key) => {
  return { type: 'FETCH_LIST', payload: key }
};

export const fetchListSuccess = (chosenList) => {
  return { type: 'FETCH_LIST_SUCCESS', payload: chosenList }
};

export const fetchListError = (error) => {
  return { type: 'FETCH_LIST_ERROR', payload: error }
};

export const addTodoAsync = (newTodo, key) => {
  return { type: 'ADD_TODO_ASYNC', payload: {newTodo, key} }
};

export const addTodoSuccess = (listKey, todoKey, addedTodo) => {
  return { type: 'ADD_TODO_SUCCESS', payload: {listKey, todoKey, addedTodo} }
};

export const addTodoError = (error) => {
  return { type: 'ADD_TODO_FAILED', payload: error }
};

export const removeTodoAsync = (listKey, todoKey) => {
  return { type: 'REMOVE_TODO_ASYNC', payload: {listKey, todoKey} }
};

export const removeTodoError = (error) => {
  return { type: 'REMOVE_TODO_FAILED', payload: error }
};

export const setTodoCheckedAsync = (listKey, todoKey, checked) => {
  return { type: 'SET_TODO_CHECKED_ASYNC', payload: {listKey, todoKey, checked} }
};

export const setTodoCheckedError = (error) => {
  return { type: 'SET_TODO_CHECKED_ERROR', payload: error }
};