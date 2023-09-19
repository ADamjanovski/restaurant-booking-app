import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
const RestaurantList = () => {
  const [category, setCategory] = useState([]);
  return (
    <div>
      <SearchBar />
      <button>Categories</button>
      <CategoryModal />
    </div>
  );
};

export default RestaurantList;
