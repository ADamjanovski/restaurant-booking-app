import { useReducer, useState } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  } else if (action.type === "BLUE") {
    return { isTouched: true };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};
const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT ", value: event.target.value });
    // setEnteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    // setIsTouched(true);
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    // setEnteredValue("");
    // setIsTouched(false);
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
