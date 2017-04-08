export const addTodo = todoText => ({
  type: 'ADD_TODO',
  todoText
});

export const changeTodoStatus = todo => ({
  type: 'CHANGE_TODO_STATUS',
  todo
});

export const changeFilter = selectedFilter => ({
  type: 'CHANGE_FILTER',
  selectedFilter
});
