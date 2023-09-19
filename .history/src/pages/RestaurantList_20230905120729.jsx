import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useContext, useEffect, useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import RestaurantCard from "../compoments/RestaurantCard";
import HamburgerIcon from "../assets/HambugerIcon";
import RestaurantsContext from "../context/restaurants-context";

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
  const ctx = useContext(RestaurantsContext);
  const showCategoryHandler = async () => {
    // setShowCategory(true);
  };
  useEffect(() => {
    if (ctx.restaurants.length === 0) {
      ctx.getRestaurants();
    }
  }, [ctx.restaurants]);
  console.log(ctx.restaurants[0].getId())
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
        {ctx.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            name={restaurant.name}
            img={restaurant.logo}
            rating={restaurant.scoreOfRating / restaurant.numberOfRating}
          />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RestaurantList;
