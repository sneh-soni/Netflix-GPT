import React from "react";
import lang from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = ({ setLoading }) => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const getMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleClick = async () => {
    setLoading(true);
    const query =
      "Act as a movie recommendation system and just give me list of 20 movies for the query : " +
      searchText.current.value +
      ",list must be comma seperated and no starting or closing brackets.I don't want any word or sentence or number before after or between the list. For example your results must be like : [golmaal, uri, hanuman, ....] list of 20 movies";

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    });

    if (!completion.choices) {
      console.log("no results for given query from GPT");
      return;
    }
    const gptResult = completion.choices?.[0]?.message?.content.split(",");
    const promisesArray = gptResult.map((movie) => getMovie(movie));
    const tmdbResults = await Promise.all(promisesArray);
    const movieResults = tmdbResults.map((array) => array[0]);
    dispatch(
      addGptMovies({ gptMovies: movieResults, openaiResults: gptResult })
    );
    setLoading(false);
  };

  return (
    <div className="flex justify-center w-full max-w-lg ">
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].placeholder}
        className="m-2 py-1 px-2 w-3/4 bg-zinc-900 rounded-md text-zinc-300 border-[3px] border-red-500 focus:outline-none focus:border-red-700"
      />
      <button
        className="m-2 py-1 px-4 bg-red-600 rounded-lg text-white"
        onClick={() => {
          if (searchText.current.value) handleClick();
        }}
      >
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
