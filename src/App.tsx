import React from 'react';
import { atom, useAtomValue } from 'jotai';

import { useGithubUsersQuery } from 'src/services/github/hooks/useGithubUsersQuery';
import { GithubReposFinder } from 'src/modules/github/GithubReposFinder';
import { GithubReposResults } from 'src/modules/github/GithubReposResults';

import { Loader } from 'src/components/Loader';

// Jotai used as a state management here, just for showcase
export const usernameAtom = atom('');

function App() {
  const username = useAtomValue(usernameAtom);

  const { data: users, isLoading } = useGithubUsersQuery(username);

  return (
    <div className="p-4">
      <GithubReposFinder />

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
