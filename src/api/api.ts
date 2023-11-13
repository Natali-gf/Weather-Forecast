import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.openweathermap.org/',
  headers: {
      'content-type': 'application/json',
  },
});
