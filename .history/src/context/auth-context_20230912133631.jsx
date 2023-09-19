import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  user: null,
  login: (username, password) => {},
  register: (newUser) => {},
  logout: (id) => {},
  getUserData: () => {},
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
  // const initialId = localStorage.getItem("userId");
  let userIsLoggedIn = false;
  let initialToken = "";
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = useCallback(async (id) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);

  }, []);

  useEffect(() => {
    const UserData = async () => {
      setUser(await getUserData());
    };
    if (token) {
      UserData();
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
          Authorization: `Bearer ${token}`,
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
      setIsLoggedIn(true);
      // setId(user.id);
      // setIsLoggedIn(true);
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
      const data = await fetch(`http://localhost:3000/api/users/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const newUser = await data.json();
      if (newUser.message) {
        alert(newUser.message);
      } else {
        return await newUser;
      }
    } catch (err) {
      alert(err);
    }
  };
  // useEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, [token]);

  if (user) {
    userIsLoggedIn = true;
  }
  const contextValue = {
    user,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
    getUserData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
