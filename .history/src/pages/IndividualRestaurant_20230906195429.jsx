import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useContext, useState,useRef } from "react";
import RestaurantsContext from "../context/restaurants-context";
const IndividualRestaurant = () => {
  const ctx = useContext(RestaurantsContext);
  const [tables, setTables] = useState([]);
  const findTableHandler = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:3000/api/restaurants/tables", {
      method: "GET",  
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const restaurant = await data.json();
    console.log(restaurant);
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <form
        onSubmit={findTableHandler}
        className="flex flex-col justify-center items-center"
      >
        <input type="date" className="w-1/2 text-center" />
        <input type="number" max={16} />
        <button>Find Table</button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
