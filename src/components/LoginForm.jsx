import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <form className="absolute bg-black bg-opacity-80 p-8 w-3/12 my-44 mx-auto right-0 left-0 text-sm text-white">
      <p className="text-3xl my-2">{signIn ? "Sign In" : "Sign Up"}</p>
      {!signIn && (
        <input
          type="text"
          placeholder="Full name"
          className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
        />
      )}
      <input
        type="email"
        placeholder="Email or phone number"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <input
        type="password"
        placeholder="password"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <button className="p-2 my-6 w-full bg-red-600 rounded-sm">
        {signIn ? "Sign In" : "Sign Up"}
      </button>
      <p className="my-8" onClick={() => setSignIn(!signIn)}>
        {signIn ? (
          <span>
            New to Netflix ?{" "}
            <span className="font-semibold cursor-pointer underline">
              Sign Up
            </span>{" "}
            now
          </span>
        ) : (
          <span>
            Already registered ?{" "}
            <span className="font-semibold cursor-pointer underline">
              Sign In
            </span>
          </span>
        )}
      </p>
    </form>
  );
};

export default LoginForm;
