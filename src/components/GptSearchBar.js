import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search Recommendations"
        className="m-2 py-2 px-4 w-3/4 bg-zinc-900 rounded-md text-zinc-300 border-[3px] border-red-500 focus:outline-none focus:border-red-700"
      />
      <button className="m-2 py-1 px-4 bg-red-600 rounded-lg text-white">
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;
