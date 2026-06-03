import { useState, useEffect } from 'react';

export interface WeatherData {
  temp: number;
  humidity: number;
  pressure: number;
  wind: number;
  windDir: number;
  rain: number;
  time: string;
}

export function useWeather(refreshInterval = 300_000) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      const res = await fetch('https://pogoda.sielata.com.pl/weather.php');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setWeather(data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { weather, loading, error };
}