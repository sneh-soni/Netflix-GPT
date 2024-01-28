import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2 w-screen">
      <h1 className="text-xl font-semibold pl-4 w-fit text-white hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-150">
        {title}
      </h1>
      {movies && (
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-none">
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
