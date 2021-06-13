import Movie from "../Movie";
import "./style.css";

function MovieList(props) {
  const { movielist } = props;

  return (
    <div className="movie-container">
      {movielist.map((movie, key) => (
        <Movie key={key} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
