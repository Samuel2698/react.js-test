import { useState, useEffect } from "react";
import { getWeather } from "../services/weather";

const useWeather = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getWeather().then((newWeather) => setData(newWeather));
  }, []);

  return { data };
};

export default useWeather;
