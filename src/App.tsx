import React, { useState } from 'react';

import { useGithubUsersQuery } from 'src/services/github/hooks/useGithubUsersQuery';
import { GithubReposFinder } from 'src/modules/github/GithubReposFinder';

function App() {
  const [username, setUsername] = useState('');

  const { data: users } = useGithubUsersQuery(username);

  return (
    <>
      <GithubReposFinder onSubmit={setUsername} />

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
    </>
  );
}

export default App;
