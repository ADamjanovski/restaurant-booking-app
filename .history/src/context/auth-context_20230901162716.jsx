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
    const data = await fetch("http://localhost:3000/api/login?oauth_consumer_key=ck_24804aab5c28eff3c41792a6f65813d8aaacf8f1&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1693578022&oauth_nonce=8uWRMJDhqk3&oauth_version=1.0&oauth_signature=QCvg%2BGMQo7TBBySAYFTuhIpVa6Q%3D", {
      method: "POST",
      body: {
        username,
        password,
      },
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
    });
    const user =await data.json();
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
