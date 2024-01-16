import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );
      const json = await data.json();
      dispatch(addPopular(json.results));
    };
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
