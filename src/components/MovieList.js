import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h1>{title}</h1>
      {movies && (
        <div className="flex overflow-x-scroll">
          <div className="flex gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
