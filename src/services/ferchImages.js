import axios from 'axios';
axios.defaults.baseURL = ' https://pixabay.com/api';
// https://pixabay.com/api/?q=cat&page=1&key=28633518-489fc3ffd26d7dcbef31e85b5&image_type=photo&orientation=horizontal&per_page=12

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=28633518-489fc3ffd26d7dcbef31e85b5&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
