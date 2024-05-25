import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovies = () => {
  const { gptMovies } = useSelector((store) => store.gpt);

  if (!gptMovies) return null;

  return (
    <div className="bg-black w-full bg-opacity-80 flex flex-grow justify-center items-center">
      <MovieList title="Search Results" movies={gptMovies} />
    </div>
  );
};

export default GptMovies;
