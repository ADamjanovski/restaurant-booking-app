import React, { useCallback, useState } from "react";
const RestaurantsContext = React.createContext({
  restaurants: [],
  restaurant: {},
  getRestaurants: (categories) => {},
  getSingleRestaurant: (restaurantId) => {},
});

export const RestaurantsContextProvider = (props) => {
  const [restaurantsList, setRestaurantsList] = useState();
  const [retreivedRestaurant, setRetreivedRestaurant] = useState({});

  const getRestaurants = useCallback(async (categories) => {
    let url;
    let myCursor;
    if (restaurantsList !== undefined) {
      myCursor = restaurantsList[restaurantsList.length - 1].id;
    } else {
      myCursor = 0;
    }
    console.log(myCursor);
    if (
      categories === undefined ||
      categories[0] === "Show All" ||
      categories.length == 0
    ) {
      url = `http://localhost:3000/api/restaurants?myCursor=${myCursor}`;
    } else {
      url = `http://localhost:3000/api/restaurants?categories[]=${JSON.stringify(
        categories
      )}&&myCursor=${myCursor}`;
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
      if (url.startsWith("http://localhost:3000/api/restaurants?categories")) {
        const fetchedRestaurants = restaurants.map(
          (data) => data.restaurant[0]
        );
        fetchedRestaurants.forEach((restaurant) => {
          let sum = 0;
          restaurant.Rating.forEach((rating) => (sum += rating.rating));
          restaurant.scoreOfRating = sum;
          restaurant.numberOfRating = restaurant.Rating.length;
        });
        setRestaurantsList(fetchedRestaurants);
        return;
      } else {
        restaurants.forEach((restaurant) => {
          let sum = 0;
          restaurant.Rating.forEach((rating) => (sum += rating.rating));
          restaurant.scoreOfRating = sum;
          restaurant.numberOfRating = restaurant.Rating.length;
        });
        setRestaurantsList(restaurants);
      }
    } catch (err) {
      throw err;
    }
  }, []);

  const getSingleRestaurant = useCallback(async (restaurantId) => {
    try {
      const data = await fetch({}`http://localhost:3000/api/restaurants`, {
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
