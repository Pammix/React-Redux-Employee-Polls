const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('action', action);
  const value = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return value;
};

export default logger;
