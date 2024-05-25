import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black py-8 w-full">
      <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      <MovieList title={"Popular"} movies={movies.Popular} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
    </div>
  );
};

export default SecondaryContainer;
