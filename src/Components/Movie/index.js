import "./style.css";

function Movie(props) {
  const { movie } = props;

  return (
    <div className="card" onClick={() => props.handleClick(movie)}>
      <img src={movie.img} alt={movie.title} />
    </div>
  );
}

export default Movie;
