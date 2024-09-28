import axios from 'axios';

export const fetchUserRepos = async (username: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  );
  return response.data;
};
