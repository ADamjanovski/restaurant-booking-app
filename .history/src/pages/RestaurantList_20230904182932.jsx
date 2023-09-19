import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import RestaurantCard from "../compoments/RestaurantCard";
import HamburgerIcon from "../assets/HambugerIcon";

// const restaurants = [
//   {
//     name: "Concept",
//     img: "concept-logo.png",
//     rating: 4.8,
//   },
//   {
//     name: "Skopski Merak",
//     img: "skopski-merak.png",
//     rating: 4.8,
//   },
//   {
//     name: "Three Bar Kitchen",
//     img: "three-bar-kitchen.png",
//     rating: 4.8,
//   },
// ];

const RestaurantList = () => {
  const [showCategory, setShowCategory] = useState(false);
  const showCategoryHandler = async () => {
    // setShowCategory(true);
    try {
      const data = await fetch("http://localhost:3000/api/restaurants", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const restaurants1 = await data.json();
      return restaurants1;
    } catch (err) {
      throw err;
    }
  };
  let restaurants = [];
  restaurants.push(showCategoryHandler());
  console.log(restaurants);
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="mb-16 flex items-center flex-col">
        <SearchBar />
        <button
          onClick={showCategoryHandler}
          className="bg-accent flex justify-between border-neutral-700 md:w-[68%] md:ml-8 py-4 p-2 w-10/12 mb-10 rounded-lg  outline-none border-2 border-"
        >
          <span className="px-3">Select Categories</span> {<HamburgerIcon />}
        </button>
        {showCategory && <CategoryModal />}
        {restaurants.forEach((restaurant) => (
          <RestaurantCard
            key={restaurant.name}
            name={restaurant.name}
            img={restaurant.img}
            rating={restaurant.scoreOfRating / restaurant.numberOfRating}
          />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RestaurantList;
