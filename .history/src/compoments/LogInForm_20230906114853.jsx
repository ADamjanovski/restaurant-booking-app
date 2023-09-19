import AuthContext from "../context/auth-context";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const submitHandler = async(event) => {
    event.preventDefault();
    const loggedin= await ctx.login(usernameInput, passwordInput);
    if (loggedin===true) {
      navigate("/home");
    } 
  };
  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const passwordHandler = (event) => {
    setPasswordInput(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <p className="mb-4">Please login to your account</p>
      {/* <!--Username input--> */}
      <div className="flex flex-col items-center ">
        <input
          id="username"
          name="username"
          onChange={usernameHandler}
          value={usernameInput}
          type="text"
          placeholder="Username"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
        ></input>
        {/* <!--Password input--> */}
        <input
          onChange={passwordHandler}
          id="password"
          name="password"
          type="password"
          value={passwordInput}
          placeholder="Password"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
        ></input>
      </div>
      {/* <!--Submit button--> */}
      <div className=" pb-1 pt-1 text-center">
        <div className="w-full">
          <button className=" bg-gradient-to-r from-primary to-accent lg:w-8/12  text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
            Log in
          </button>
        </div>{" "}
        {/* <!--Forgot password link--> */}
      </div>
      {/* <!--Register button--> */}
    </form>
  );
};

export default LoginForm;
