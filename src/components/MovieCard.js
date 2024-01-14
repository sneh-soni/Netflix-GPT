import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-40">
      <img alt="movie card" src={IMG_CDN + poster_path} />
    </div>
  );
};

export default MovieCard;
