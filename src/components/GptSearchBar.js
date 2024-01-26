import React from "react";
import lang from "../utils/languages";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={lang[langKey].placeholder}
        className="m-2 py-2 px-4 w-3/4 bg-zinc-900 rounded-md text-zinc-300 border-[3px] border-red-500 focus:outline-none focus:border-red-700"
      />
      <button className="m-2 py-1 px-4 bg-red-600 rounded-lg text-white">
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
