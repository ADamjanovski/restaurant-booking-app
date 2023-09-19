import React, { Fragment, useCallback, useEffect, useState } from "react";
let logoutTimer;
const RestaurantsContext = React.createContext({
  restaurants: [],
  restaurant: {},
  getRestaurants: (isNewCategory, categories) => {},
  getSingleRestaurant: (restaurantId) => {},
});

export const RestaurantsContextProvider = (props) => {
  const [restaurantsList, setRestaurantsList] = useState();
  const [retreivedRestaurant, setRetreivedRestaurant] = useState({});

  const getRestaurants = useCallback(async (categories) => {
    let url;
    if (
      categories === undefined ||
      categories[0] === "Show All" ||
      categories.length == 0
    ) {
      url = "http://localhost:3000/api/restaurants";
    } else {
      url = `http://localhost:3000/api/restaurants?categories[]=${categories}`;
    }
    try {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const restaurants = await data.json();
      console.log(restaurants);
      const fetchedRestaurants = restaurants.map((data) => {
        data.restaurant[0];
      });
      // setRestaurantsList(restaurants);
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

      setRetreivedRestaurant(restaurant);
    } catch (err) {
      throw err;
    }
  }, []);

  const contextValue = {
    restaurants: restaurantsList,
    getRestaurants,
    getSingleRestaurant,
    restaurant: retreivedRestaurant,
  };

  return (
    <RestaurantsContext.Provider value={contextValue}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContext;
