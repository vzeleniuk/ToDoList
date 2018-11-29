
// export const addList = (list) => {
//   return (dispatch, getState, { getFirebase }) => {
//      const firebase = getFirebase();
//      firebase.push('lists', list)
//      .then(() => {
//       dispatch({ type: 'ADD_LIST', list }) 
//      })
//      .catch((err) => {
//        dispatch({ type: 'ADD_LIST_ERROR', err})
//      })
//   }
// }

export const requestLists = () => {
  return { type: 'REQUEST_LISTS' } 
};

export const requestListsSuccess = (lists) => {
  console.log('requestListsSuccess', lists)
  return { type: 'REQUEST_LISTS_SUCCESS', payload: lists }
};

export const requestListsError = () => {
  return { type: 'REQUEST_LISTS_FAILED' }
};

export const fetchLists = () => {
  return { type: 'FETCH_LISTS' }
};

// export const addList = (list) => {
//   console.log(list.list)
//   return { type: 'ADD_LIST', payload: list.list }
// }

// export const addListSuccess = (data) => {
//   return { type: 'ADD_LIST_SUCCESS', data }
// };

// export const addListError = () => {
//   return { type: 'REQUESTED_LIST_FAILED' }
// };

// export const addListAsync = (list) => {
//   return { type: 'ADD_LIST_ASYNC', list }
// };

// export const removeList = (path) => {
//   return (dispatch, getState, {getFirebase}) => {
//     const firebase = getFirebase();
//     firebase.remove(`lists/${path}`)
//     .then(() => {
//       dispatch({ type: 'REMOVE_LIST', path})
//     })
//     .catch((err) => {
//       dispatch({ type: 'REMOVE_LIST_ERROR', err})
//     })
//   }
// }