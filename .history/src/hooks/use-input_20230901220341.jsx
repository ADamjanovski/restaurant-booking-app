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
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
