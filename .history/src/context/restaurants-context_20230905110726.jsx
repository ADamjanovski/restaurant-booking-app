import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const RestContext = React.createContext({
  restaurants: [],
  restaurant: {},
});
