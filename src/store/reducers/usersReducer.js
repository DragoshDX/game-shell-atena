const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'users/set':
      return {
        users: payload || [],
      };
    default:
      return state;
  }
};
