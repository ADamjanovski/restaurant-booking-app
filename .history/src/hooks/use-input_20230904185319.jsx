import { useReducer, useState } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  } else if (action.type === "BLUR") {
    return { isTouched: true };
  }
  return initialInputState;
};
const useInput = () => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = true;
  const hasError = !valueIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT ", value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  console.log(input)
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
