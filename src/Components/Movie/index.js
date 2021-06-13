import "./style.css";

function Movie(props) {
  const { movie } = props;

  return (
    <div className="card" onClick={() => props.handleClick(movie)}>
      <a href="#preview">
        <img src={movie.img} alt={movie.title} />
      </a>
    </div>
  );
}

export default Movie;
