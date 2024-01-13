import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        options
      );
      const json = await data.json();
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers.length ? trailers[0] : json.results[0];
      dispatch(addTrailer(trailer));
    };
    getVideo();
  }, []);
};

export default useMovieTrailer;
