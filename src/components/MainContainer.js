import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
