import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="min-w-full">
      <Header />
      <img
        src={BG_URL}
        alt="background "
        className="absolute h-full w-full object-cover"
      />
      <LoginForm />
    </div>
  );
};

export default Login;
