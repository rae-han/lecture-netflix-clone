import axios from 'axios';

import { MOVIEDB_API_ACCESS_TOKEN, MOVIEDB_API_URL } from '../constants/api.ts';

export const api = axios.create({
  baseURL: MOVIEDB_API_URL,
  headers: {
    Authorization: `Bearer ${MOVIEDB_API_ACCESS_TOKEN}`,
  },
});
