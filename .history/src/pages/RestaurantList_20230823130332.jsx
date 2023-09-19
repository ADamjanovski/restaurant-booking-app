import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import RestaurantCard from "../compoments/RestaurantCard";
import HamburgerIcon from "../assets/HambugerIcon";

const restaurants = [
  {
    name: "Concept",
    img: "concept-logo.png",
    rating: 4.8,
  },
  {
    name: "Skopski Merak",
    img: "skopski-merak.png",
    rating: 4.8,
  },
  {
    name: "Three Bar Kitchen",
    img: "three-bar-kitchen.png",
    rating: 4.8,
  },
];

const RestaurantList = () => {
  const [showCategory, setShowCategory] = useState(false);
  const showCategoryHandler = () => {
    setShowCategory(true);
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="mb-16 flex items-center flex-col">
        <SearchBar />
        <button
          onClick={showCategoryHandler}
          className="bg-secondary flex justify-between border-neutral-500    p-2 w-10/12 mb-10 rounded-lg  outline-none border-2 border-"
        >
          <span className="px-3">Select Categories</span> {<HamburgerIcon />}
        </button>
        {showCategory && <CategoryModal />}
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              name={restaurant.name}
              img={restaurant.img}
              rating={restaurant.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RestaurantList;
