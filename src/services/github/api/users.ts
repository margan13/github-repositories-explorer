import axios from 'axios';

export const fetchUsers = async (username) => {
  const response = await axios.get(`https://api.github.com/search/users`, {
    params: {
      q: username,
      per_page: 5,
    },
  });

  return response.data.items;
};
