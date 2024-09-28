import React, { useState } from 'react';

import { useGithubUsersQuery } from 'src/services/github/hooks/useGithubUsersQuery';
import { GithubReposFinder } from 'src/modules/github/GithubReposFinder';
import { GithubReposResults } from 'src/modules/github/GithubReposResults';

import { Loader } from 'src/components/Loader';

function App() {
  const [username, setUsername] = useState('');

  const { data: users, isLoading } = useGithubUsersQuery(username);

  return (
    <div className="p-4">
      <GithubReposFinder onSubmit={setUsername} />

      {isLoading && <Loader />}

      {!isLoading && !!users?.length && (
        <div>
          <div className="my-4">Showing users for {`"${username}"`}</div>

          <GithubReposResults users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
