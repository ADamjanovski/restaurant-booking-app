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
  // const storedExpirationDate = localStorage.getItem("expirationTime");
  // const remainingTime = calculateRemainingTime(storedExpirationDate);
  // if (remainingTime <= 3600) {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("expirationTime");
  //   return null;
  // }
  return {
    token: storedToken,
    // remainingTime: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = redreveStoredToken();
  let userIsLoggedIn = false;
  let initialToken = "";
  useEffect(() => {
    if (tokenData) {
      initialToken = tokenData.token;
      userIsLoggedIn = true;
    }
  }, []);
  const [token, setToken] = useState(initialToken);
  const [refreshToken, setRefreshToken] = useState("");
  let id = "";
  const logoutHandler = useCallback(async () => {
    localStorage.removeItem("authToken");
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
      setToken(null);
      userIsLoggedIn = false;
      setRefreshToken(null);
      localStorage.setItem("authToken", token);
      id = user.id;
    } catch (err) {
      throw err;
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
      setToken(user.accessToken);
      userIsLoggedIn = true;
      setRefreshToken(user.refreshToken);
      localStorage.setItem("authToken", token);
      id = user.id;
    } catch (err) {
      throw err;
    }

    // localStorage.setItem("expirationTime", expirationTime);
    // const remainingTime = calculateRemainingTime(expirationTime);
    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const registerHandler = async (newUser) => {
    try {
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
      setToken(user.accessToken);
      setUserIsLoggedIn(true);
      setRefreshToken(user.refreshToken);
      return <Navigate replace to="/home" />;
    } catch (err) {
      alert(err);
    }
    // const user = await data.json();
  };
  useEffect(() => {
    if (tokenData) {
      // logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, []);
  const contextValue = {
    id,
    token: token,
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
