import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);

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
    if (!trailer) getVideo();
  }, []);
};

export default useMovieTrailer;
