import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Filtre.css";
const Filtre = ({ handleChange, title, ratingChanged }) => {
  return (
    <div>
      <div className="fil">
        <input
          className="searchInputs"
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className="stars">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          isHalf={true}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
};

export default Filtre;
