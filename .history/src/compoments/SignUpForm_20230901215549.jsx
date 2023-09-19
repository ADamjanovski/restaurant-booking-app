import AuthContext from "../context/auth-context";
import React, { useContext, useState } from "react";
import useInput from "../hooks/use-input";

const SignUpForm = () => {
  const ctx = useContext(AuthContext);
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: usernameInputValue,
    isValid: usernameInputIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameInputBlurHandler,
    reset: usernameReset,
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
  const {
    value: passwordInputValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.length > 6);
  const {
    value: confirmPasswordInputValue,
    isValid: confirmPasswordInputIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
    reset: confirmPasswordReset,
  } = useInput((value) => value === passwordInputValue);
  let formIsValid =
    emailInputIsValid && nameInputIsValid && surnameInputIsValid ? true : false;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    ctx
      .register
      // {
      //     username:
      // }
      ();
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
          value={usernameInputValue}
          required
        ></input>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={nameInputValue}
        ></input>{" "}
        <input
          id="surname"
          name="surname"
          type="text"
          placeholder="Surname"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={surnameInputValue}
          onChange={surnameChangeHandler}
          onBlur={surnameInputBlurHandler}
        ></input>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={emailInputValue}
        ></input>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={passwordInputValue}
          onChange={passwordChangeHandler}
          onBlur={passwordInputBlurHandler}
        ></input>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={confirmPasswordInputValue}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordInputBlurHandler}
        ></input>
      </div>

      <div className="w-full mb-12 pb-1 pt-1 text-center">
        <button
          className="disabled:from-neutral-500 disabled:to-neutral-500 bg-gradient-to-r from-primary to-accent lg:w-8/12 text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-0 "
          disabled={!formIsValid}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
