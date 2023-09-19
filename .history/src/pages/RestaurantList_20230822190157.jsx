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
        <button className="bg-accent p-3 w-10/12 rounded-xl ">Select Categories</button>
        <CategoryModal />
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default RestaurantList;
