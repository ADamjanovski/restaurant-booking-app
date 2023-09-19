import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
const RestaurantList = () => {
  const [showCategory, setShowCategory] = useState(false);
  const showCategoryHandler=()=>{
    
  }
  return (
    <React.Fragment>
      <MainNavigation/>
      <div>
        <SearchBar />
        <button onClick={showCategoryHandler} className="bg-accent p-3 w-10/12 mb-10 rounded-lg ring-neutral-500 outline-none focus:ring-primary focus:border-none ring-2">Select Categories</button>
        {showCategory && <CategoryModal />}
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default RestaurantList;
