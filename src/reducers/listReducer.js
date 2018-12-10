const initState = {
  lists: {},
  loading: false,
  error: false
};

export const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_LISTS':
      return state;
    case 'REQUEST_LISTS_SUCCESS': 
      return {
        ...state,
        lists: action.payload.lists
      };
    case 'REQUEST_LISTS_FAILED':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };
    case 'CHOOSE_LIST':
      return {
        ...state,
        selectedListKey: action.payload
      };
    case 'ADD_LIST_SUCCESS':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.addedListKey]: action.payload.addedList
        }
      };
    case 'FETCH_LIST_SUCCESS': 
      return {
          ...state,
          selectedListData: action.payload
        };
    case 'ADD_LIST_FAILED':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };
    case 'REMOVE_LIST_FAILED':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };

    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listKey]: {
            ...state.lists[action.payload.listKey],
            items: {
              ...state.lists[action.payload.listKey].items,
              [action.payload.todoKey]: action.payload.addedTodo
            }
          }
        }
      };
    case 'ADD_TODO_ERROR':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };
    case 'REMOVE_TODO_ERROR':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };
    case 'SET_TODO_CHECKED_ERROR':
    console.log(action.payload.error)
      return {
        ...state,
        error: true
      };
    default:
      return state;
  } 
}