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
          <div className="bg-black opacity-90 my-4 rounded-md font-bold text-6xl  text-center py-36">
            <p className="animate-pulse text-red-600">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
