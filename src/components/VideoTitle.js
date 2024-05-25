import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 h-full w-full flex justify-start items-end bg-gradient-to-r from-black">
      <div className="flex flex-col px-4 md:px-12 text-white gap-2">
        <div className="text-2xl lg:text-4xl font-bold w-full max-w-xs break-words">
          {title}
        </div>
        <p className="w-full max-w-lg text-sm md:text-base ">{overview}</p>
        <div className="flex gap-2 w-full my-4">
          <button className="px-8 rounded-md py-2 bg-white text-black md:text-xl">
            Play
          </button>
          <button className="px-6 rounded-md py-2 bg-black bg-opacity-50 md:text-xl">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
