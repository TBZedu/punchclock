import axios from 'axios'
import tokenService from './token'

const instance = axios.create({
  baseURL: `${window.origin}/api`,
  timeout: 1000,
  headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
});

export default instance;