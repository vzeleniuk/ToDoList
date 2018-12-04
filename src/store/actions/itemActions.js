export const fetchListAsync = (key) => {
  return { type: 'FETCH_LIST', payload: key }
};

export const fetchListSuccess = (chosenList) => {
  return { type: 'FETCH_LIST_SUCCESS', payload: chosenList }
};

export const fetchListError = () => {
  return { type: 'FETCH_LIST_ERROR' }
};

export const addTodoAsync = (newTodo, key) => {
  return { type: 'ADD_TODO_ASYNC', payload: {newTodo, key} }
};

export const addTodoSuccess = (listKey, todoKey, addedTodo) => {
  return { type: 'ADD_TODO_SUCCESS', payload: {listKey, todoKey, addedTodo} }
};

export const addTodoError = () => {
  return { type: 'ADD_TODO_FAILED' }
};

export const removeTodoAsync = (listKey, todoKey) => {
  return { type: 'REMOVE_TODO_ASYNC', payload: {listKey, todoKey} }
};

export const removeTodoSuccess = (listKey, todoKey) => {
  return { type: 'REMOVE_TODO_SUCCESS', payload: {listKey, todoKey} }
};

export const removeTodoError = () => {
  return { type: 'REMOVE_TODO_FAILED' }
};