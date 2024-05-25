import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.Popular);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );
      const json = await data.json();
      dispatch(addPopular(json.results));
    };
    if (!popular) getPopularMovies();
  }, []);
};

export default usePopularMovies;
