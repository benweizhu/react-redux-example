export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.todo
        ]
      });
    default:
      return state;
  }
};
