export const fetchLists = () => {
  return { type: 'FETCH_LISTS' }
};

export const requestLists = () => {
  return { type: 'REQUEST_LISTS' } 
};

export const requestListsSuccess = (lists) => {
  return { type: 'REQUEST_LISTS_SUCCESS', payload: lists }
};

export const requestListsError = () => {
  return { type: 'REQUEST_LISTS_FAILED' }
};

export const chooseList = (list) => {
  return { type: 'CHOOSE_LIST', payload: list }
};

export const addListAsync = (newList) => {
  return { type: 'ADD_LIST_ASYNC', payload: newList }
};

export const addListSuccess = (addedList, addedListKey) => {
  return { type: 'ADD_LIST_SUCCESS', payload: {addedList, addedListKey} }
};

export const addListError = () => {
  return { type: 'REQUESTED_LIST_FAILED' }
};

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