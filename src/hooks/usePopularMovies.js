import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const options = {
  method: "GET",
  headers: {
    Type: "get-popular-movies",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.Popular);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://movies-tv-shows-database.p.rapidapi.com/?year=2020&page=1",
        options
      );
      const json = await data.json();
      dispatch(addPopular(json.movie_results));
    };
    if (!popular) getPopularMovies();
  }, []);
};

export default usePopularMovies;
