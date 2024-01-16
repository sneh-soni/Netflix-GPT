import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcoming } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        options
      );
      const json = await data.json();
      dispatch(addUpcoming(json.results));
    };
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
