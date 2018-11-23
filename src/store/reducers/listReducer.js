const initState = {
  lists: [
    {"id": 1,
    "listName": "Shopping List Dummy",
    "dateCreated": "2018-11-14"},
    {"id": 2,
    "listName": "Important Stuff Dummy",
    "dateCreated": "2018-07-04"},
    {"id": 3,
    "listName": "Kitty Stuff Dummy",
    "dateCreated": "2018-02-01"},
    {"id": 4,
    "listName": "Just Dummy",
    "dateCreated": "2018-01-01"}
  ]
}

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      console.log('added list', action.list);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default: 
      return state;
  }
}

export default listReducer;