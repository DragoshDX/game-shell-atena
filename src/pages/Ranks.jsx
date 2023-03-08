import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts';
import { readUsers } from '../store/actions/users/usersActions';

export const Ranks = () => {
  const dispatch = useDispatch();
  // refactor
  const users = useSelector(({ users }) => {
    return users.users;
  });

  // refactor 2
  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container mx-auto px-4 mt-4">
        <header>
          <h1 className="text-3xl font-bold">Ranks</h1>
        </header>

        <main className="mt-8">
          {users.length > 0 ? (
            <ul>
              {users.map(({ id, stats }) => {
                return (
                  <li>
                    <Link className="flex justify-between" to={`/ranks/${id}`}>
                      {id}

                      <span>Games played: {stats.gamesPlayed}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>nu am useri</>
          )}
        </main>
      </div>
    </Layout>
  );
};
