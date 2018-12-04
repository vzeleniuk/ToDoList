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
        lists: action.payload.lists
      };
    case 'REQUEST_LISTS_FAILED':
      return {
        ...state,
        error: true
      };
    case 'CHOOSE_LIST':
      return {
        ...state,
        selectedListKey: action.payload.key
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
      console.log('action.payload.list', action.payload)
      return {
          ...state,
          selectedListData: action.payload
        };
    case 'ADD_LIST_FAILED':
      return {
        ...state,
        error: true
      };
    case 'REMOVE_LIST_FAILED':
      return {
        ...state,
        error: true
      };

    case 'ADD_TODO_SUCCESS':
      console.log('add todo', action.payload.listKey, action.payload.todoKey, action.payload.addedTodo);
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
      console.log('add todo error', action.err);
      return state;
    case 'REMOVE_TODO_SUCCESS':
      console.log('remove todo success', action.payload.listKey, action.payload.todoKey);
      return state;
    case 'REMOVE_TODO_ERROR':
      console.log('add todo error', action.err);
      return state;
    default:
      return state;
  } 
}

export default fetchLists;