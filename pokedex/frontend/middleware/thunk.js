const thunk = store => next => action => {
//   debugger;
  if (typeof action === "function") {
    // debugger;
    return action(store.dispatch, store.getState);
  }
//   debugger;
  return next(action);
};

export default thunk;
