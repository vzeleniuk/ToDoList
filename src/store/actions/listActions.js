export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
     // make asyn call to db
     const firebase = getFirebase();
     firebase.push('lists', list)
     .then(() => {
      dispatch({ type: 'ADD_LIST', list }) 
     })
     .catch((err) => {
       dispatch({ type: 'CREATE_PROJECT_ERROR', err})
     })

  }
   
}