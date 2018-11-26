const initState = {

};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKED':
      console.log('toggled checked', action.checked);
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.checked } : todo
      );
    case 'CREATE_CHECK_ERROR':
      console.log('create checked error', action.err);
      return state;
    
    default:
    return state;
  }
}

export default itemReducer;