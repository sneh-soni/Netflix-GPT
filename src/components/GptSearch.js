import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative">
      <img
        src={BG_URL}
        alt="background"
        className="w-screen h-screen object-cover"
      />
      <div className="pt-[10%] w-screen absolute top-0 z-20">
        <GptSearchBar />
        <GptMovies />
      </div>
    </div>
  );
};

export default GptSearch;
