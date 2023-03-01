// functie care primeste payload de user, si returneaza
// {type: '', payload: {}}
// action creator:
export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};
