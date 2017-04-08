export default (state = { todo: [] }, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return { ...state };
    default:
      return state;
  }
};
