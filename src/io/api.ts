import axios from 'axios';

import { getApiUrl } from './environment';

const api = axios.create({
  baseURL: `${getApiUrl()}/api`,

  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default api;
