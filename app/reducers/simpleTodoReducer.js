export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.todo,
            complete: false
          }
        ]
      });
    default:
      return state;
  }
};
