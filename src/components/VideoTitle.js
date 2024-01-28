import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] w-screen aspect-video px-16 absolute text-white bg-gradient-to-r from-black">
      <div className="text-5xl font-bold w-1/3 break-all">{title}</div>

      <div className="flex gap-2 w-1/3 my-6">
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
