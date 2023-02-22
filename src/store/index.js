const { createStore } = require('redux');

const reducer = (state = 42, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
