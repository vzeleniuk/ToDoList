export const addTodo = (todo, path) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.push(`lists/${path}/items/`, todo)
    .then(() => {
     dispatch({ type: 'ADD_TODO', todo, path }) 
    })
    .catch((err) => {
      dispatch({ type: 'ADD_TODO_ERROR', err})
    })
  }
}

export const removeTodo = (id, path) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.remove(`lists/${path}/items/${id}`)
    .then(() => {
     dispatch({ type: 'REMOVE_TODO', id, path }) 
    })
    .catch((err) => {
      dispatch({ type: 'REMOVE_TODO_ERROR', err})
    })
  }
}