import axios from 'axios';
import {SERVICE_URL, publicApiKey, timestamp, hash} from './config';

export const serviceApi = axios.create({
  baseURL: SERVICE_URL,
  params: {
    ts: timestamp,
    apikey: publicApiKey,
    hash: hash,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});
