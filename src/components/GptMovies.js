import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovies = () => {
  const { gptMovies, showLoading } = useSelector((store) => store.gpt);

  if (!gptMovies) return null;

  return showLoading ? (
    <div className="text-white text-5xl">Loading...</div>
  ) : (
    <div className="py-4 my-4 bg-black bg-opacity-80">
      <MovieList title="Search Results" movies={gptMovies} />
    </div>
  );
};

export default GptMovies;
