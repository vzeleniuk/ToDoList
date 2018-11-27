export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
     const firebase = getFirebase();
     firebase.push('lists', list)
     .then(() => {
      dispatch({ type: 'ADD_LIST', list }) 
     })
     .catch((err) => {
       dispatch({ type: 'ADD_LIST_ERROR', err})
     })
  }
}

export const removeList = (path) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.remove(`lists/${path}`)
    .then(() => {
      dispatch({ type: 'REMOVE_LIST', path})
    })
    .catch((err) => {
      dispatch({ type: 'REMOVE_LIST_ERROR', err})
    })
  }
}