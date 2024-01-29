import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] top-[20%] flex justify-between lg:block lg:top-0 w-screen lg:aspect-video px-8 lg:px-16 absolute text-white lg:bg-gradient-to-r lg:from-black">
      <div className="text-xl lg:text-5xl font-bold w-1/3 break-words">
        {title}
      </div>

      <div className="flex gap-2 w-1/3 my-6">
        <button className="px-10 rounded-md py-2 bg-white text-black text-xl">
          Play
        </button>
        <button className="hidden lg:inline-block px-10 rounded-md py-2 bg-black bg-opacity-50 text-xl">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
