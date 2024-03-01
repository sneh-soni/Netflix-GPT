import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const options = {
  method: "GET",
  headers: {
    Type: "get-trending-movies",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://movies-tv-shows-database.p.rapidapi.com/?page=1",
        options
      );
      const json = await data.json();
      dispatch(addTopRated(json.movie_results));
    };
    if (!topRated) getTopRatedMovies();
  }, []);
};

export default useTopRated;
