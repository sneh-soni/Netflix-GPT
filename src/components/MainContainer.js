import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import MovieList from "./MovieList";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const { title, imdb_id, year } = movies[0];
  return (
    <div className="w-screen">
      <VideoTitle title={title} overview={year} />
      {/* <BackgroundVideo movieId={imdb_id} />
      <div className="">
        <MovieList title={"Now Playing"} movies={movies} />
      </div> */}
    </div>
  );
};

export default MainContainer;
