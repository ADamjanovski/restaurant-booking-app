import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  id: null,
  login: (username, password) => {},
  register: (newUser) => {},
  logout: (id) => {},
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
  const initialId = localStorage.getItem("authToken");
  let userIsLoggedIn = false;
  let initialToken = "";
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [refreshToken, setRefreshToken] = useState("");
  const [id, setId] = useState(initialId);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = useCallback(async (id) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    setId(null);
    setToken(null);
    setIsLoggedIn(false);
    // try {
    //   const data = await fetch("http://localhost:3000/api/logout", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username: "andrej123",
    //       password: "andrej123",
    //     }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const user = await data.json();
    //   setToken(null);
    //   setRefreshToken(null);
    //   localStorage.setItem("authToken", token);
    //   id = user.id;
    // } catch (err) {
    //   throw err;
    // }
  }, []);
  useEffect(() => {
    if (token) {
      userIsLoggedIn = true;
    }
  }, []);

  const loginHandler = async (username, password) => {
    try {
      const data = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const user = await data.json();
      if (user.message) {
        throw new Error(user.message);
      }
      localStorage.setItem("userId", user.id);
      localStorage.setItem("authToken", user.accessToken);
      setToken(user.accessToken);
      setRefreshToken(user.refreshToken);
      setId(user.id);
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      alert(err.message);
      return false;
    }

    // localStorage.setItem("expirationTime", expirationTime);
    // const remainingTime = calculateRemainingTime(expirationTime);
    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const registerHandler = async (User) => {
    try {
      const data = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        body: JSON.stringify({
          name: User.name,
          lastName: User.lastName,
          username: User.username,
          email: User.email,
          password: User.password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const newUser = await data.json();
      console.log(newUser.message);
      if (newUser.message !== null) {
        alert(newUser.message);
      } else {
        setToken(newUser.accessToken);
        setRefreshToken(newUser.refreshToken);
        return <Navigate replace to="/home" />;
      }
    } catch (err) {
      alert(err);
    }
    // const user = await data.json();
  };

  const getUserData = async () => {
    try {
      const data = await fetch(`http://localhost:3000/api/users/`, {
        method: "GET",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const newUser = await data.json();
      if (newUser.message !== null) {
        alert(newUser.message);
      } else {
        return newUser;
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);
  const contextValue = {
    id: id,
    token: token,
    isLoggedIn: isLoggedIn,
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
