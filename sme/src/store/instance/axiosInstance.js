import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001'
  //baseURL: 'http://192.168.137.1:5000'
  //baseURL: 'http://161.246.58.241:9123'
});

export default instance;