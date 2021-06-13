import "./style.css";
import { FaStar } from "react-icons/fa";

function Preview(props) {
  const { movie } = props;

  return (
    <div className="movie-preview">
      <div className="preview-container">
        <img src={movie.imgback} alt={movie.title} className="movie-img" />
        <h1 className="movie-title">{movie.title}</h1>
        <div className="data-container">
          <h2 className="movie-year">{movie.year}</h2>
          <div className="popularity">
            <FaStar size="22" />
            <h2 className="movie-popularity">{movie.vote}</h2>
          </div>
        </div>
        <p className="movie-description">{movie.overview}</p>
      </div>
    </div>
  );
}

export default Preview;
