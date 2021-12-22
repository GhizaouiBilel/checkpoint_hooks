import React from "react";
import MovieCard from "./MovieCard";
import "./Movieslist.css";
const Movieslist = ({ movies }) => {
  return (
    <div className="container">
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movieslist;
