import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path, original_title }) => {
  if (!poster_path) return null;

  return (
    <div className="flex flex-col hover:scale-125 transition-all ease-in-out hover:cursor-pointer">
      <div className="w-36 h-52 flex justify-center items-center">
        <div className="w-28 h-40">
          <img
            alt="movie card"
            src={IMG_CDN + poster_path}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="text-white text-center">{original_title}</div>
    </div>
  );
};

export default MovieCard;
