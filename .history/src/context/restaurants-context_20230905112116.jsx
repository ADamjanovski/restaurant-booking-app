import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const RestaurantsContext = React.createContext({
  restaurants: [],
  restaurant: {},
});


export const RestaurantsContextProvider= (props)=>{
    const [restaurantsList,setRestaurantsList]=useState([]);
    const [retreivedRestaurant,setRetreivedRestaurant]=useState({});

    const getRestaurantsHandler = async (pageNumber)=>{
        try {
            const data = await fetch("http://localhost:3000/api/restaurants", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            restaurants = await data.json();
            // return await restaurants1;
          } catch (err) {
            throw err;
          }
    }

    const contextValue = {
        id,
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
}