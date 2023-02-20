import axios from 'axios';

const baseUrl = 'https://alive-east-airedale.glitch.me/';

export const client = axios.create({
  baseURL: baseUrl,
});
