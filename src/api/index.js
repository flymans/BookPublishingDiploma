import axios from 'axios';

const api = axios.create({
  baseURL: 'https://book-aggregator.herokuapp.com/books',
});

export default api;
