import { client } from './../../../api/users';

// functie care primeste payload de user, si returneaza
// {type: '', payload: {}}
// action creator:
export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};

// GET -> /users/12312312421342131
export const readUser = (userId) => {
  return async () => {
    const { data } = await client.get(`/users/${userId}`);

    return data;
  };
};

// POST -> /users
export const createUser = (userId) => {
  return async () => {
    const { data } = await client.post('/users', {
      id: userId,
      stats: {
        gamesWon: 0,
        gamesLost: 0,
        gamesPlayed: 0,
      },
    });

    return data;
  };
};
