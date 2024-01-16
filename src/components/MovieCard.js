import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path, original_title }) => {
  return (
    <div className="flex flex-col">
      <div className="w-36 h-52 flex justify-center items-center">
        <div className="w-28 h-40 hover:h-52 hover:w-36 hover:cursor-pointer">
          <img
            alt="movie card"
            src={IMG_CDN + poster_path}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="text-white text-sm font-semibold flex justify-center">
        {original_title}
      </div>
    </div>
  );
};

export default MovieCard;
