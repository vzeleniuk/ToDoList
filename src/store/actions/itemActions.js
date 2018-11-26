export const toggleChecked = (checked) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.update('lists', checked)
    .then(() => {
     dispatch({ type: 'TOGGLE_CHECKED', checked }) 
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_CHECKED_ERROR', err})
    })
  }
}