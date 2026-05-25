import api from '../api/axios.js';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeather = async (city) => {
    const res = await api.get('/weather', {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
        }
    });
    return res.data;
}