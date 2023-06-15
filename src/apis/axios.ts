import axios from 'axios';

import { MOVIEDB_API_URL } from '../constants/api.ts';

export const api = axios.create({
  withCredentials: true,
  baseURL: MOVIEDB_API_URL,
});
