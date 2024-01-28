import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import MovieList from "./MovieList";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];
  return (
    <div className="w-screen relative">
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
      <div className="absolute -bottom-12">
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  );
};

export default MainContainer;
