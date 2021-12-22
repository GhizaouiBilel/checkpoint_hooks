import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Cards.css";
function MovieCard({ movie }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={movie.posterUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{movie.title}</h3>
        </div>
        <div className="card-descriprion">
          <p>{movie.description}</p>
        </div>
        <br />
        <div className="card-rating">
          <ReactStars
            count={movie.rate}
            size={40}
            isHalf={true}
            color={"#ffd700"}
          />
        </div>
      </div>
      <div className="card-button">
        {" "}
        <button className="Button">Watch</button>
      </div>
    </div>
  );
}

export default MovieCard;
