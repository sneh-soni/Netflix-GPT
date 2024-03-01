import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black lg:pt-10 w-screen">
      <div className="relative top-80 pl-2">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.Popular} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
