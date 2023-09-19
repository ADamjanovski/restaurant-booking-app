import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useContext, useState } from "react";
import RestaurantsContext from "../context/restaurants-context";
const IndividualRestaurant = () => {
  const ctx = useContext(RestaurantsContext);
  const [tables, setTables] = useState([]);
  const findTableHandler = async () => {
    const data = await fetch("http://localhost:3000/api/restaurants/tables" ,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const restaurant = await data.json();

    });
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <form className="flex flex-col justify-center items-center">
        <input type="date" className="w-1/2 text-center" />
        <button onClick={findTableHandler}>Find Table</button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
