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

// export const removeTodo = (id, path) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     firebase.remove(`lists/${path}/items/${id}`)
//     .then(() => {
//      dispatch({ type: 'REMOVE_TODO', id, path }) 
//     })
//     .catch((err) => {
//       dispatch({ type: 'REMOVE_TODO_ERROR', err})
//     })
//   }
// }