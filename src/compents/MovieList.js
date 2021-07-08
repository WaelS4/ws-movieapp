import React from "react";
import MovieCard from "./MovieCard";
import "./style.css";
const MovieList = ({ movieList }) => {
  return (
    <div className="conteneur">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
