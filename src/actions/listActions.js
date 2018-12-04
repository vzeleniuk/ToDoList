export const fetchLists = () => {
  return { type: 'FETCH_LISTS' }
};

export const requestLists = () => {
  return { type: 'REQUEST_LISTS' } 
};

export const requestListsSuccess = (lists) => {
  return { type: 'REQUEST_LISTS_SUCCESS', payload: lists }
};

export const requestListsError = (error) => {
  return { type: 'REQUEST_LISTS_FAILED', payload: error }
};

export const chooseList = (key) => {
  return { type: 'CHOOSE_LIST', payload: key }
};

export const addListAsync = (newList) => {
  return { type: 'ADD_LIST_ASYNC', payload: newList }
};

export const addListSuccess = (addedList, addedListKey) => {
  return { type: 'ADD_LIST_SUCCESS', payload: {addedList, addedListKey} }
};

export const addListError = (error) => {
  return { type: 'ADD_LIST_FAILED', payload: error }
};

export const removeList = (key) => {
  return { type: 'REMOVE_LIST', payload: key }
}

export const removeListError = (error) => {
  return { type: 'REMOVE_LIST_ERROR', payload: error }
}