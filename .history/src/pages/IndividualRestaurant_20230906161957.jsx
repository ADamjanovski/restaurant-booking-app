import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React from "react";
const IndividualRestaurant = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <form className="flex flex-col justify-center items-center">
        <input type="date" className="w-1/2 text-center"/>
        <button onClick={findTableHandler}>Find Table</button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
