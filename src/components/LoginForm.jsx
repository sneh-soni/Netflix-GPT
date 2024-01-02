import React from "react";
import { useState, useRef } from "react";
import { Validate } from "../utils/Validate";

const LoginForm = () => {
  const [signIn, setSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute bg-black bg-opacity-80 p-8 w-3/12 my-44 mx-auto right-0 left-0 text-sm text-white"
    >
      <p className="text-3xl my-2">{signIn ? "Sign In" : "Sign Up"}</p>
      {!signIn && (
        <input
          name="Full name"
          type="text"
          placeholder="Full name"
          className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
        />
      )}
      <input
        ref={email}
        autoComplete="on"
        type="text"
        placeholder="Email or phone number"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <input
        ref={password}
        autoComplete="on"
        type="password"
        placeholder="password"
        className="py-2 px-4 my-2 bg-neutral-800 rounded-sm w-full"
      />
      <p className="text-red-600 text-sm font-semibold py-2">{errMessage}</p>
      <button
        className="p-2 my-6 w-full bg-red-600 rounded-sm"
        onClick={() => {
          const message = Validate(email.current.value, password.current.value);
          setErrMessage(message);
        }}
      >
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
