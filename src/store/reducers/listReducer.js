// import { combineReducers } from 'redux';

const initState = {
  lists: {},
  loading: false,
  error: false
};

const fetchLists = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_LISTS':
      return state;
    case 'REQUEST_LISTS_SUCCESS':
      return {
        ...state,
        lists: action.payload
      };
    case 'REQUEST_LISTS_FAILED':
      return {
        ...state,
        error: true
      };
    case 'CHOOSE_LIST':
      return {
        ...state,
        selectedList: action.payload
      };
    case 'ADD_LIST_SUCCESS':
    console.log('added list success', action.payload.addedList, action.payload.addedListKey);
      return {
        ...state,
        lists: {
          ...state.lists,
          lists: {
            ...state.lists.lists,
            [action.payload.addedListKey]: action.payload.addedList
            }
          }
      };
    case 'ADD_LIST_FAILED':
      return {
        ...state,
        error: true
      };
    case 'REMOVE_LIST':
      return state;
    case 'REMOVE_LIST_SUCCESS':
      const key = action.payload;
      delete state.lists.lists[key];
      return {
        ...state,
        lists: {...state.lists}
      };
    case 'REMOVE_LIST_FAILED':
      return {
        ...state,
        error: true
      };
    default: 
      return state;
  }
}

// const operateList = (state = initState, action) => {
//    switch (action.type) {

//     default: 
//       return state;
//   }
// }

// const listReducer = combineReducers({
//   fetchLists,
//   operateList
// })

export default fetchLists;