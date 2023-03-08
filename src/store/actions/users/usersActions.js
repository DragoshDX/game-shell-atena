import { client } from '../../../api/users';

// async thunk
export const readUsers = () => {
  return async (dispatch) => {
    const { data } = await client.get('/users');

    dispatch(setUsers(data));
  };
};

// sync action creator
export const setUsers = (users) => {
  return {
    type: 'users/set',
    payload: users,
  };
};
