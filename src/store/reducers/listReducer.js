const initState = {
  
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      console.log('added list', action.list);
      return state;
    case 'REMOVE_LIST':
      console.log('removed list', action.path);
      return state;
    case 'ADD_LIST_ERROR':
      console.log('add list error', action.err);
      return state;
    case 'REMOVE_LIST_ERROR':
      console.log('create list error', action.err);
      return state;
    default: 
      return state;
  }
}

export default listReducer;