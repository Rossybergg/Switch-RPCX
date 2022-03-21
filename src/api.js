import axios from 'axios';

const apiUrl = 'http://localhost:9001/api';

export const api = axios.create({ baseURL: apiUrl });
