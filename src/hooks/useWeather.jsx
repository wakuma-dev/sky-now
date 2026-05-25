import { useEffect, useState } from "react";
import useWeatherStore from "../app/store/useWeatherStore";

export default function useWeather() {
  const city = useWeatherStore((state) => state.city);

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        setError("");

        if (!city) return;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&units=metric`,
        );

        const result = await res.json();

        if (!res.ok || result.cod !== 200) {
          throw new Error(result.message);
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, error, isLoading };
}
