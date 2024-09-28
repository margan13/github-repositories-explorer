import axios from 'axios';
import config from 'src/config/public';

export const fetchUsers = async (username) => {
  const response = await axios.get(`https://api.github.com/search/users`, {
    params: {
      q: username,
      per_page: 5,
    },
    headers: {
      Authorization: `token ${config.GithubToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data.items;
};
