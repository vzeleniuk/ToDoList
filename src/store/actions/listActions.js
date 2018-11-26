export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
     const firebase = getFirebase();
     firebase.push('lists', list)
     .then(() => {
      dispatch({ type: 'ADD_LIST', list }) 
     })
     .catch((err) => {
       dispatch({ type: 'CREATE_LIST_ERROR', err})
     })
  }
}