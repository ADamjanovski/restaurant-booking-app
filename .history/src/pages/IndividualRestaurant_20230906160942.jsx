import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React from "react";
const IndividualRestaurant = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <form className="flex flex-col">
        <input type="date" className="w-"/>
        <button>Reserve</button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
