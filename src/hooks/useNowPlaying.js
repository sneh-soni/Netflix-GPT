import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const json = await data.json();
      dispatch(addNowPlaying(json.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
