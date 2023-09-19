import AuthContext from "../context/auth-context";
import React, { useContext } from "react";
import useInput from "../hooks/use-input";
import { userExist } from "../functions/Functions";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isStrong = (value) => value.length > 6;
const SignUpForm = () => {
  const ctx = useContext(AuthContext);
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: usernameInputValue,
    isValid: usernameInputIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameInputBlurHandler,
  } = useInput(userExist);
  const {
    value: surnameInputValue,
    isValid: surnameInputIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput(isEmail);
  const {
    value: passwordInputValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput(isStrong);
  const {
    value: confirmPasswordInputValue,
    isValid: confirmPasswordInputIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
  } = useInput((value) => value === passwordInputValue);
  let formIsValid =
    emailInputIsValid &&
    nameInputIsValid &&
    surnameInputIsValid &&
    confirmPasswordInputIsValid &&
    passwordInputIsValid
      ? true
      : false;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    ctx.register({
      username: usernameInputValue,
      name: nameInputValue,
      lastName: surnameInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <p className="mb-4 text-2xl">Please Sign Up</p>
      <div className="flex flex-col items-center ">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className=" px-3 py-1 rounded-lg lg:w-8/12"
          value={usernameInputValue}
          required
          onChange={usernameChangeHandler}
          onBlur={usernameInputBlurHandler}
        ></input>
        {usernameInputHasError && <p lassName="text-sm mb-4 ">Username is already taken</p>}
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          className=" px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={nameInputValue}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        ></input>{" "}
        {nameInputHasError && <p className="text-sm mb-4 ">First Name can't be empty</p>}
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
        {surnameInputHasError && <p lassName="text-sm mb-4 ">Surname can't be empty</p>}
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email address"
          className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
          required
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        ></input>
        {emailInputHasError && <p lassName="text-sm mb-4 ">Email needs to contain @</p>}
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
        {passwordInputHasError && <p>Password is not strong enough</p>}
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
        {confirmPasswordInputHasError && <p>Passwords don't match.</p>}
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
