import "./App.css";
import responseResults from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";

const App = () => {
  const movies = responseResults.Search;
  const hasMovies = movies.length > 0;

  return (
    <div className="page">
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form">
          <input type="text" placeholder="Avengers,Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se ha encontrado la peli...</p>
        )}
      </main>
    </div>
  );
};

export default App;
