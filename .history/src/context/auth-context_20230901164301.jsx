import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const redreveStoredToken = () => {
  const storedToken = localStorage.getItem("authToken");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime <= 3600) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    remainingTime: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  // const tokenData = redreveStoredToken();
  // let initialToken;
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }
  // const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = false;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("authToken");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = async (username, password) => {
    const data = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: {
        username: "andrej123",
        password: "andrej123",
      },
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'application/json',
      },
    });
    const user = await data.json();
    console.log(user);
    // setToken(token);
    // localStorage.setItem("authToken", token);
    // localStorage.setItem("expirationTime", expirationTime);
    // const remainingTime = calculateRemainingTime(expirationTime);
    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  // useEffect(() => {
  //   if (tokenData) {
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);
  const contextValue = {
    token: null,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
