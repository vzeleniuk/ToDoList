// import { combineReducers } from 'redux';

const initState = {
  lists: {},
  loading: false,
  error: false,
  added: false
};

const fetchLists = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_LISTS':
      return {
        lists: {},
        loading: false,
        error: false,
      };
    case 'REQUEST_LISTS_SUCCESS':
      return {
        ...state,
        lists: action.payload
      };
    case 'REQUEST_LISTS_FAILED':
      return {
        lists: '',
        loading: false,
        error: true,
      };
    case 'CHOOSE_LIST':
      return {
        ...state,
        list: action.payload
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
          },
        added: true
        // OR?action.payload ? true : false
      };
    case 'ADD_LIST_FAILED':
      return {
        ...state,
        added: false,
        error: true
      };
    default: 
      return state;
  }
}

// const operateList = (state = initState, action) => {
//   // switch (action.type) {
//     // case 'REMOVE_LIST':
//     //   console.log('removed list', action.path);
//     //   return {
//     //     lists: action.path,
//     //     loading: false,
//     //     error: false,
//     //   };

//     // case 'REMOVE_LIST_ERROR':
//     //   console.log('create list error', action.err);
//     //   return state;
//     default: 
//       return state;
//   }
// }

// const listReducer = combineReducers({
//   fetchLists,
//   operateList
// })

export default fetchLists;