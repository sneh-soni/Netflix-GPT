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
    <div className="flex flex-col hover:scale-125 transition-all ease-in-out hover:cursor-pointer">
      <div className="w-36 h-52 flex justify-center items-center">
        <div className="w-28 h-40">
          <img alt="movie card" src={poster} className="h-full w-full" />
        </div>
      </div>
      <div className="text-white text-center">{original_title}</div>
    </div>
  );
};

export default MovieCard;
