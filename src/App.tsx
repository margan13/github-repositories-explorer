import React from 'react';
import './App.css';
import { useGithubUsersQuery } from 'src/services/github/hooks/useGithubUsersQuery';

function App() {
  const { data: users } = useGithubUsersQuery('margan');

  console.log(users);

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id} style={{ marginBottom: '50px' }}>
          <div>{user.login}:</div>
          <div>
            {user.repos.map((repo) => (
              <div key={repo.id}>{repo.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
