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
      <div className="w-full h-2/3 absolute bottom-0 z-20 flex flex-col gap-2 items-center">
        <GptSearchBar setLoading={setLoading} />

        {!loading ? (
          <GptMovies />
        ) : (
          <div className="bg-black w-full opacity-80 font-semibold flex text-4xl justify-center items-center flex-grow">
            <p className="animate-pulse text-red-600">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
