export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.todoText,
            complete: false
          }
        ]
      });
    }
    case 'CHANGE_TODO_STATUS': {
      const todos = state.todos.map((todo) => {
        if (todo.text === action.todo.text) {
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
