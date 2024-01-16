import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 py-2">
      <h1 className="text-xl font-semibold mb-2 text-white">{title}</h1>
      {movies && (
        <div className="flex overflow-x-scroll overflow-y-hidden">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                original_title={movie.original_title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
