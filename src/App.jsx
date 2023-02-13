import "./App.css";
import useWeather from "./hooks/useWeather";

const App = () => {
  const { data } = useWeather();

  const CITY = data.name;
  const TIMEZONE = data.timezone;
  const TEMPERATURE = data.main?.temp;

  return (
    <div>
      <h1>Puro entreno</h1>
      <h2>{CITY}</h2>
      <h2>{TIMEZONE}</h2>
      <h2>{TEMPERATURE}</h2>
    </div>
  );
};

export default App;
