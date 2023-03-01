const initialState = {
  authenticated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    id: '',
    name: '',
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/logOut':
      return {
        ...state,
        authenticated: false,
      };
    case 'auth/setUser':
      return {
        authenticated: true,
        user: payload,
      };
    default:
      return state;
  }
};
