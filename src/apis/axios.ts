import axios from 'axios';

import { API_URL } from '../constants/api.ts';

// export const api = axios.create({
//   baseURL: MOVIEDB_API_URL,
//   headers: {
//     Authorization: `Bearer ${MOVIEDB_API_ACCESS_TOKEN}`,
//   },
// });

export const api = axios.create({
  baseURL: API_URL,
});
