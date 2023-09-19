import SearchBar from "../compoments/UI/SearchBar";
const categories = [
    { name: "Show All", logo: "" },
    { name: "Italian", logo: "src/assets/Italian_Cuisine.png" },
    { name: "Healty ", logo: "src/assets/Healthy_Cuisine.png" },
    { name: "Indian ", logo: "src/assets/Indian_Cuisine.png" },
    { name: "Korean", logo: "src/assets/Korean_Cuisine.png" },
    { name: "Turkish ", logo: "src/assets/Turkish_Cuisine.png" },
    { name: "Breakfast", logo: "src/assets/Breakfast_Cuisine.png" },
    { name: "Mexican", logo: "src/assets/Mexican_Cuisine.png" },
  ];
  
const RestaurantList = () => {
    const [category,setCategory]=useState([]);
  return (
    <div>
      <SearchBar />
      <button>Choose Category</button>
    </div>
  );
};

export default RestaurantList;
