import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  id: "",
  login: (username, password) => {},
  register: (newUser) => {},
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
  const [token, setToken] = useState(initialToken);
  const [userIsLoggedIn 
  let id = "";
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("authToken");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = async (username, password) => {
    try {
      const data = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: "andrej123",
          password: "andrej123",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const user = await data.json();
      setToken(user.token)
    } catch (err) {
      alert(user.err);
    }

    // setToken(token);
    // localStorage.setItem("authToken", token);
    // localStorage.setItem("expirationTime", expirationTime);
    // const remainingTime = calculateRemainingTime(expirationTime);
    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const registerHandler = async (newUser) => {
    const data = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        newUser,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const newUser = await data.json();
    // const user = await data.json();
  };
  // useEffect(() => {
  //   if (tokenData) {
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);
  const contextValue = {
    id: "",
    token: null,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
