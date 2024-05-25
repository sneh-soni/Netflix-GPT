import React from "react";
import { IMG_CDN } from "../utils/constants.js";

const MovieCard = ({ poster_path, original_title }) => {
  if (!poster_path) return null;

  return (
    <div className="flex flex-col hover:cursor-pointer">
      <div className="w-28 h-40 md:w-36 md:h-48 flex justify-center items-center hover:scale-125 transition-all ease-in-out">
        <div className="w-20 h-32 md:w-28 md:h-40">
          <img
            alt="movie card"
            src={IMG_CDN + poster_path}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="text-white text-center text-xs md:text-sm">
        {original_title}
      </div>
    </div>
  );
};

export default MovieCard;
