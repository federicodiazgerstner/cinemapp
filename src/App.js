import "./reset.css";
import "./App.css";
import { AiFillFire } from "react-icons/ai";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import Preview from "./Components/Preview";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchData(
      "https://api.themoviedb.org/3/discover/movie?api_key=6d70914c66326c0134b0e0329c7bf0d2"
    );
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  async function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.results.map((movie, key) => ({
          id: movie.id,
          title: movie.title,
          vote: movie.vote_average,
          overview: movie.overview,
          year: movie.release_date,
          img: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          imgback: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }));
        setMovies(mappedData);
      });
  }

  function handleChange(value) {
    setClicked(false);
    setClickedMovie({});
    if (value !== "") {
      fetchData(
        `https://api.themoviedb.org/3/search/movie?api_key=6d70914c66326c0134b0e0329c7bf0d2&language=en-US&query=${value}&page=1&include_adult=false`
      );
    } else {
      fetchData(
        "https://api.themoviedb.org/3/discover/movie?api_key=6d70914c66326c0134b0e0329c7bf0d2"
      );
    }
  }

  function handleMovie(movie) {
    if (movie === clickedMovie) {
      setClicked(false);
      setClickedMovie({});
    } else {
      setClickedMovie(movie);
      setClicked(true);
    }
  }

  const handleRating = useCallback(
    (value) => {
      if (value !== 0) {
        setFilteredMovies(
          movies.filter(
            (movie) => movie.vote <= value && movie.vote >= value / 2
          )
        );
      } else {
        setFilteredMovies(movies.filter((movie) => movie.vote <= 10));
      }
    },
    [movies]
  );

  return (
    <div className="App">
      <div className="hero">
        <Navbar />
        <div className="search-container">
          <h1 className="hero-title">
            Start a new video journey by discovering your next movie.
          </h1>
          <Search handleCallback={handleChange} />
        </div>
      </div>
      <div id="preview">{clicked && <Preview movie={clickedMovie} />}</div>
      <div className="discover-section">
        <div className="discover-title">
          <AiFillFire />
          <h2>Discover Movies</h2>
        </div>
        <div className="filter-container">
          <p>Filter by</p>
          <Filter handleChange={handleRating} />
        </div>
      </div>

      <div className="movie-container">
        <MovieList movielist={filteredMovies} handleClick={handleMovie} />
      </div>
      <div className="footer">
        <div className="title-container">
          <h1 className="title">
            Become a member now and enjoy multiple benefits!
          </h1>
        </div>
        <div className="form-container">
          <h1 className="form-title">Create Account</h1>
          <input
            type="text"
            className="input"
            name="firstname"
            placeholder="Name"
          />
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div className="flex-container">
            <p className="subtext">
              Already have an account?{" "}
              <a href="/" className="link">
                Sign In
              </a>
            </p>
            <a href="/">
              <p className="button">Create Account</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
