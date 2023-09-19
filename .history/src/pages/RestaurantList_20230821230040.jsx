import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";
const categories = [
  { name: "Show All", logo: "" },
  { name: "Italian", logo: "src/assets/Italian_Cuisine.png" },
  { name: "Healty ", logo: "src/assets/Healthy_Cuisine.png" },
  { name: "Indian ", logo: "src/assets/Indian_Cuisine.png" },
  { name: "Korean", logo: "src/assets/Korean_Cuisine.png" },
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
