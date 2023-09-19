import AuthContext from "../context/auth-context";
import React, { useContext, useState } from "react";
import useInput from "../hooks/use-input";

const SignUpForm = () => {
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: surnameInputValue,
    isValid: surnameInputIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameInputBlurHandler,
    reset: surnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  let formIsValid =
    emailInputIsValid && nameInputIsValid && surnameInputIsValid ? true : false;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!emailInputIsValid || !nameInputIsValid || !surnameInputIsValid) {
      return;
    }

    nameReset();
    surnameReset();
    emailReset();
  };
  return (
    <form>
      <p className="mb-4 text-2xl">Please Sign Up</p>
      <div className="flex flex-col items-center ">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>{" "}
        <input
          id="surname"
          name="surname"
          type="text"
          placeholder="Last Name"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email address"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
        ></input>
      </div>

      <div className="w-full mb-12 pb-1 pt-1 text-center">
        <button
          className="disabled: bg-gradient-to-r from-primary to-accent lg:w-8/12 text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-0 "
          disabled={!formIsValid}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
