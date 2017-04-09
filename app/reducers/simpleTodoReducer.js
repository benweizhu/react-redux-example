let count = 0;
export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      count += 1;
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: count,
            text: action.todo,
            complete: false
          }
        ]
      });
    default:
      return state;
  }
};
