const API_KEY = "91215c79b93abda41bbcf9ea9c48ff0c";
const CITY_NAME = "Paris";
const OPEN_WEATHER_MAP_ENDOPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

export async function getWeather() {
  const res = await fetch(OPEN_WEATHER_MAP_ENDOPOINT);
  const data = await res.json();
  console.log(data);
  return data;
}
