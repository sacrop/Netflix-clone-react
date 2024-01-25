import axios from 'axios'
import { baseUrl } from './Constants';
const instance = axios.create({
    baseURL: baseURL
  });
  export default instance;