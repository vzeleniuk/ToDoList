const initState = {
  
}

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      console.log('added list', action.list);
      return state;
    case 'CREATE_LIST_ERROR':
      console.log('create list error', action.err);
      return state;
    default: 
      return state;
  }
}

export default listReducer;