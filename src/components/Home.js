import React from "react";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BG_URL, logo } from "../utils/constants";

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden relative">
      <div className="absolute flex justify-center md:justify-start w-full bg-gradient-to-b from-black px-10">
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <img
        src={BG_URL}
        alt="background"
        className="w-screen h-screen object-cover"
      />
      <div className="flex flex-col gap-4 absolute top-[5%] w-4/5 max-w-2xl text-white bg-black bg-opacity-80 p-4 rounded-lg">
        <div className="text-center text-lg md:text-2xl">Welcome back!</div>
        <div className="text-3xl md:text-5xl text-center font-bold">
          Enjoy big movies, hit series and more from ₹149.
        </div>
        <div className="text-center text-lg md:text-2xl">
          Join today. Cancel anytime.
        </div>
        <div className="flex justify-center">
          <Link to={"/login"}>
            <button className="flex gap-2 items-center text-lg md:text-2xl font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
              Finish Sign Up
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-mirrorinrtl="true"
                class="default-ltr-cache-4z3qvp e1svuwfo1"
                data-name="ChevronRight"
                aria-hidden="true"
                className="pt-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-2 bg-stone-700 w-screen"></div>
      <FAQ />
      <div className="h-2 bg-stone-700 w-screen"></div>
      <Footer />
    </div>
  );
};

export default Home;
