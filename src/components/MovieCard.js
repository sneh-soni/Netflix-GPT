import React, { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    Type: "get-movies-images-by-imdb",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

const MovieCard = ({ imdb_id, original_title }) => {
  const [poster, setPoster] = useState("");
  useEffect(() => {
    const fetchMoviePoster = async (movie_id) => {
      const response = await fetch(
        `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${movie_id}`,
        options
      );
      const result = await response.json();
      setPoster(result.poster);
    };
    fetchMoviePoster(imdb_id);
  }, []);

  if (poster === "") return null;

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
