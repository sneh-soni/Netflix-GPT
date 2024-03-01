import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const options = {
  method: "GET",
  headers: {
    Type: "get-nowplaying-movies",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://movies-tv-shows-database.p.rapidapi.com/?page=1",
        options
      );
      const json = await data.json();
      dispatch(addNowPlaying(json.movie_results));
    };
    if (!nowPlaying) getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
