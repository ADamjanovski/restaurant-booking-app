import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
const categories = [
  "Show All",
  "Italian",
   "Healty ", 
   "Indian ", 
   "Korean", 
   "Turkish ",
   "Breakfast",
   "Mexican", 
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
