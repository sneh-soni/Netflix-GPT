import React from "react";
import lang from "../utils/languages";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  return (
    <div className="flex justify-center">
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].placeholder}
        className="m-2 py-2 px-4 w-3/4 bg-zinc-900 rounded-md text-zinc-300 border-[3px] border-red-500 focus:outline-none focus:border-red-700"
      />
      <button
        className="m-2 py-1 px-4 bg-red-600 rounded-lg text-white"
        onClick={async () => {
          const query =
            "Act as a movie recommendation system and give me list of 10 movies for the qurey : " +
            searchText.current.value +
            ",list must be comma seperated like the example result given ahead. Example result: koi mil gya, fighter, golmaal, phir hera pheri, don";

          const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: query }],
            model: "gpt-3.5-turbo",
          });
          console.log(completion.choices);
        }}
      >
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
