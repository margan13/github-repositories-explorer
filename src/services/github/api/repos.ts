import axios from 'axios';
import config from 'src/config/public';

export const fetchUserRepos = async (username: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${config.GithubToken}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );

  return response.data;
};
