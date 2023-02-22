import { createStore } from 'redux';

const reducer = (state = 42, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
