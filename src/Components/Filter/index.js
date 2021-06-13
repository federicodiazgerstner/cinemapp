import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function Filter(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const rating_value = (i + 1) * 2;
        return (
          <label>
            <input
              className="radio-button"
              type="radio"
              name="rating"
              value={rating_value}
              onClick={() => {
                if (rating === rating_value) {
                  setRating(0);
                  props.handleChange(0);
                } else {
                  setRating(rating_value);
                  props.handleChange(rating_value);
                }
              }}
            />
            <FaStar
              className="star"
              size="22"
              color={rating_value <= (hover || rating) ? "#ffc107" : "#AFADAD"}
              onMouseEnter={() => setHover(rating_value)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Filter;
