import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailer);

  return (
    <iframe
      className="w-full h-full aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1&loop=1&controls=0"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default BackgroundVideo;
