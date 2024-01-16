import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const json = await data.json();
      dispatch(addTopRated(json.results));
    };
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
