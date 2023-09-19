import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import RestaurantCard from "../compoments/RestaurantCard";

const restaurants = [
  {
    name: "Concept",
    img: "concept-logo.png",
    rating : 5.4,
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
      <div className="mb-16">
        <SearchBar />
        <button
          onClick={showCategoryHandler}
          className="bg-accent p-3 w-10/12 mb-10 rounded-lg ring-neutral-500 outline-none focus:ring-primary focus:border-none ring-2"
        >
          Select Categories
        </button>
        {showCategory && <CategoryModal />}
        <div className="flex justify-center"> 
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} name={restaurant.name} img={restaurant.img} rating={restaurant.rating}/>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RestaurantList;
