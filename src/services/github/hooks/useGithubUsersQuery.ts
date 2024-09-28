import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from 'src/services/github/api/users';
import { fetchUserRepos } from 'src/services/github/api/repos';

const fetchUsersWithRepos = async (username: string) => {
  const users = await fetchUsers(username);

  return await Promise.all(
    users.map(async (user: any) => {
      const repos = await fetchUserRepos(user.login);

      return { ...user, repos };
    }),
  );
};

export const useGithubUsersQuery = (username: string) => {
  return useQuery({
    queryKey: ['users', username],
    queryFn: () => fetchUsersWithRepos(username),
    enabled: !!username,
  });
};
