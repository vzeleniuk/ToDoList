const initState = {
  lists: {},
  loading: false,
  error: false,
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUESTED_LISTS':
    console.log('requested list');
      return {
        lists: {},
        loading: false,
        error: false,
      };
    case 'REQUESTED_LISTS_SUCCESS':
    console.log('requested list success', action.payload);
      state = {
        ...state,
        lists: action.payload
      };
      break;
    case 'REQUESTED_LISTS_FAILED':
      return {
        lists: '',
        loading: false,
        error: true,
      };
    // case 'ADD_LIST':
    //   console.log('added list', action.payload);
    //   return {
    //     lists: action.payload,
    //     loading: false,
    //     error: false,
    //   };
    // case 'ADD_LIST_SUCCESS':
    // console.log('added list success', action.list);
    //   return {
    //     lists: action.list,
    //     loading: false,
    //     error: false,
    //   };
    // case 'ADD_LIST_FAILED':
    //   return {
    //     lists: '',
    //     loading: false,
    //     error: true,
    //   };
    // case 'REMOVE_LIST':
    //   console.log('removed list', action.path);
    //   return {
    //     lists: action.path,
    //     loading: false,
    //     error: false,
    //   };
    // case 'ADD_LIST_ERROR':
    //   console.log('add list error', action.err);
    //   return state;
    // case 'REMOVE_LIST_ERROR':
    //   console.log('create list error', action.err);
    //   return state;
    default: 
      return state;
  }
}

export default listReducer;