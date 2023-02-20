import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const client = axios.create({
  baseURL: baseUrl,
});
