import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const json = await data.json();
      dispatch(addNowPlaying(json.results));
    };
    if (!nowPlaying) getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
