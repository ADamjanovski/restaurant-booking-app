import CategoryModal from "../compoments/UI/Modal/CategoryModal";
import SearchBar from "../compoments/UI/SearchBar";
import { useState } from "react";

const RestaurantList = () => {
  const [category, setCategory] = useState([]);
  return (
    <div>
      <SearchBar />
      <button>Categ</button>
      <CategoryModal />
    </div>
  );
};

export default RestaurantList;
