import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="relative">
      <img
        src={BG_URL}
        alt="background"
        className="w-screen h-screen object-cover"
      />
      <div className="pt-[10%] w-screen absolute top-0 z-20">
        <GptSearchBar setLoading={setLoading} />

        {!loading ? (
          <GptMovies />
        ) : (
          <div className="text-white text-5xl animate-pulse text-center pt-24">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
