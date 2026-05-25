import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeOut: 10000,
});
export default api;