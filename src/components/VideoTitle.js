import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] w-screen aspect-video px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 my-2">{overview}</p>
      <div className="flex gap-2">
        <button className="px-10 rounded-md py-2 bg-white text-black text-xl">
          Play
        </button>
        <button className="px-10 rounded-md py-2 bg-black bg-opacity-50 text-xl">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
