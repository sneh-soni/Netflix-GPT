import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

const options = {
  method: "GET",
  headers: {
    Type: "get-upcoming-movies",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://movies-tv-shows-database.p.rapidapi.com/?page=1",
        options
      );
      const json = await data.json();
      dispatch(addUpcoming(json.movie_results));
    };
    if (!upcoming) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
