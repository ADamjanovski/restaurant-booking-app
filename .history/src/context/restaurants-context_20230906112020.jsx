import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const RestaurantsContext = React.createContext({
  restaurants: [],
  restaurant: {},
  getRestaurants: (pageNumber) => {},
  getSingleRestaurant: (restaurantId) => {},
});

export const RestaurantsContextProvider = (props) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [retreivedRestaurant, setRetreivedRestaurant] = useState({});

  const getRestaurants = useCallback(async (pageNumber) => {
    try {
      const data = await fetch("http://localhost:3000/api/restaurants", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const restaurants = await data.json();
      setRestaurantsList(restaurants);
      // return await restaurants1;
    } catch (err) {
      throw err;
    }
  }, []);

  const getSingleRestaurant = useCallback(async (restaurantId) => {
    try {
      const data = await fetch("http://localhost:3000/api/restaurants", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const restaurant = await data.json();

      setRetreivedRestaurant(restaurants);
      // return await restaurants1;
    } catch (err) {
      throw err;
    }
  }, []);

  const contextValue = {
    restaurants: restaurantsList,
    getRestaurants,
    getSingleRestaurant,
    singleRestaurant : retreivedRestaurant
  };

  return (
    <RestaurantsContext.Provider value={contextValue}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContext;
