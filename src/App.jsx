import "./App.css";
import Otro from "./components/Otro";
import useCatFact from "./hooks/useCatFact";
import useGif from "./hooks/useGif";

const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { gif } = useGif({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <div>
      <header>
        <h1>App de Gifs :)</h1>
        <button onClick={handleClick}>Rechercher:</button>
      </header>
      <main>
        {fact && <p>{fact}</p>}
        {gif && (
          <img
            src={gif}
            alt={`Image extracted from the first two words of: ${fact}`}
          />
        )}

        <Otro />
      </main>
    </div>
  );
};

export default App;
