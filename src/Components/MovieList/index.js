import Movie from "../Movie";
import "./style.css";

function MovieList(props) {
  const { movielist } = props;

  function handleView(clickedMovie) {
    props.handleClick(clickedMovie);
  }

  return (
    <div className="movie-container">
      {movielist.map((movie, key) => (
        <Movie key={key} movie={movie} handleClick={handleView} />
      ))}
    </div>
  );
}

export default MovieList;
