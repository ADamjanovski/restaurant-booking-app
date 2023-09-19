import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
const RestaurantList = () => {
  const [category, setCategory] = useState([]);
  return (
    <React.Fragment>
      <MainNavigation/>
      <div>
        <SearchBar />
        <button c>Select Categories</button>
        <CategoryModal />
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default RestaurantList;
