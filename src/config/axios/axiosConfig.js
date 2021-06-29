import axios from 'axios';

export const initialAxiosConfig = () => {
  axios.defaults.baseURL = 'https://api.brella.io/api';
};
