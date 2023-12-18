import React from "react";

const header = () => {
  return (
    <div className="absolute mx-32 h-1/6 w-3/4 flex justify-between items-center">
      <div className="h-4/5">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="h-full"
        />
      </div>
      <div className="flex gap-8">
        <button className="bg-black border-[0.10px] rounded-md border-white text-white font-bold px-10 py-1">
          English
        </button>
        <button className="px-3 py-2 bg-red-600 text-white font-bold rounded-md text-sm hover:bg-red-700">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default header;
