import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-2">
      <h1 className="text-xl font-semibold mb-2 text-white">{title}</h1>
      {movies && (
        <div className="flex overflow-x-scroll">
          <div className="flex gap-2">
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
