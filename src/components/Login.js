import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <>
      <Header />
      <img src={BG_URL} alt="background " className="absolute" />
      <LoginForm />
    </>
  );
};

export default Login;
