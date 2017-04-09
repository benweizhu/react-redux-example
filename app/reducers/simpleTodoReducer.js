let count = 0;
export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      count += 1;
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: count,
            text: action.todoText,
            complete: false
          }
        ]
      });
    }
    case 'CHANGE_TODO_STATUS': {
      const todos = state.todos.map((todo) => {
        if (todo.id === +action.todo.id) {
          todo.complete = action.todo.complete;
        }
        return todo;
      });
      return Object.assign({}, state, {
        todos
      });
    }
    default:
      return state;
  }
};
