import "./style.css";

function Movie(props) {
  const { movie } = props;

  return (
    <div className="card">
      <a href="/">
        <img src={movie.img} alt={movie.title} />
      </a>
    </div>
  );
}

export default Movie;
