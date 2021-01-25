import axios from 'axios';

const api = axios.create({
  baseURL: 'http://leadsoft.ddns.com.br:18355/api/v1/',
});

export default api;
