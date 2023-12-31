import React from "react";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [signIn, setSignIn] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute bg-black bg-opacity-80 p-8 w-3/12 my-32 mx-auto right-0 left-0 text-sm text-white"
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
          if (message) return;
          if (!signIn) {
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                const user = userCredential.user;
                navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode + " " + errorMessage);
              });
          } else {
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                const user = userCredential.user;
                navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode + " " + errorMessage);
              });
          }
        }}
      >
        {signIn ? "Sign In" : "Sign Up"}
      </button>
      <p className="my-8" onClick={() => setSignIn(!signIn)}>
        {signIn ? (
          <span>
            New to Netflix?
            <span
              onClick={() => {
                setErrMessage(null);
              }}
              className="font-semibold mx-1 cursor-pointer underline"
            >
              Sign Up
            </span>
            now
          </span>
        ) : (
          <span>
            Already registered?
            <span
              onClick={() => {
                setErrMessage(null);
              }}
              className="font-semibold mx-1 cursor-pointer underline"
            >
              Sign In
            </span>
          </span>
        )}
      </p>
    </form>
  );
};

export default LoginForm;
