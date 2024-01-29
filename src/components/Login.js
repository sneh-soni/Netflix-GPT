import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="h-screen w-screen ">
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
