const initState = {
  todo: {},
  error: false
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      console.log('add todo', action.payload.listKey, action.payload.todoKey, action.payload.addedTodo);
      return {
        ...state,
        todo: action.payload.addedTodo
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

export default itemReducer;