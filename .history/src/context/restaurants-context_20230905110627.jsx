import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  restaurants: "",
  refreshToken: "",
  isLoggedIn: false,
  id: "",
  login: (username, password) => {},
  register: (newUser) => {},
  logout: (id) => {},
});