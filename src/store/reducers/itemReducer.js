const initState = {
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('add todo', action.todo, action.path);
      return state;
    case 'REMOVE_TODO':
      console.log('remove todo', action.id, action.path);
      return state;
    case 'ADD_TODO_ERROR':
      console.log('add todo error', action.err);
      return state;
    case 'REMOVE_TODO_ERROR':
      console.log('add todo error', action.err);
      return state;
    default:
      return state;
  }
}

export default itemReducer;