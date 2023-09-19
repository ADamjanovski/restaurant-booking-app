import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
const categories = [
  "Show All"
  { name: "Italian",
  { name: "Healty ", 
  { name: "Indian ", 
  { name: "Korean", 
  { name: "Turkish ",
  { name: "Breakfast",
  { name: "Mexican", 
];

const RestaurantList = () => {
  const [category, setCategory] = useState([]);
  return (
    <div>
      <SearchBar />
      <button>Choose Category</button>
    </div>
  );
};

export default RestaurantList;
