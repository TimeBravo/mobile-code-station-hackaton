import axios from 'axios';

const api = axios.create({
  baseURL: 'https://b7f2bc5e2f0a.ngrok.io',
});

export default api;