import SearchBar from "../compoments/UI/SearchBar";
import { useContext, useEffect, useState } from "react";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import RestaurantCard from "../compoments/RestaurantCard";
import HamburgerIcon from "../assets/HambugerIcon";
import RestaurantsContext from "../context/restaurants-context";
import Modal from "@mui/material/Modal";
import { useLocation } from "react-router-dom";
const initialCategories = [
  { name: "Show All", checked: "false" },
  { name: "Italian", checked: "false" },
  { name: "Healty ", checked: "false" },
  { name: "Indian ", checked: "false" },
  { name: "Korean", checked: "false" },
  { name: "Turkish ", checked: "false" },
  { name: "Breakfast", checked: "false" },
  { name: "Mexican", checked: "false" },
];

const RestaurantList = () => {
  const location = useLocation();
  const initialCategory = new URLSearchParams(location.search).get(
    "initialCategory"
  );
  const item = initialCategories.findIndex(
    (category) => category.name === initialCategory
  );
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [categories, setCategories] = useState(initialCategories);
  const ctx = useContext(RestaurantsContext);

  useEffect(() => {
    if (ctx.restaurants.length === 0) {
      ctx.getRestaurants();
    }
  }, [ctx.restaurants]);
  return (
    <>
      <MainNavigation />
      <div className="mb-16 flex items-center flex-col">
        <SearchBar />
        <button
          onClick={handleOpen}
          className="bg-accent flex justify-between border-neutral-700 md:w-[68%] md:ml-8 py-4 p-2 w-10/12 mb-10 rounded-lg  outline-none border-2 border-"
        >
          <span className="px-3">Select Categories</span> {<HamburgerIcon />}
        </button>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div></div>
          </Modal>
        )}
        {ctx.restaurants &&
          ctx.restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              id={restaurant.id}
              name={restaurant.name}
              img={restaurant.logo}
              rating={restaurant.scoreOfRating / restaurant.numberOfRating}
              numberOfRatings={restaurant.numberOfRating}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default RestaurantList;