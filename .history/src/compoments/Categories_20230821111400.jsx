import { Navigate } from "react-router-dom";
import IndividualCategory from "./IndividualCategory";
const categories = [
  { name: "Italian", logo: "src/assets/Italian_Cuisine.png" },
  { name: "Healty ", logo: "src/assets/Healthy_Cuisine.png" },
  { name: "Indian ", logo: "src/assets/Indian_Cuisine.png" },
  { name: "Korean", logo: "src/assets/Korean_Cuisine.png" },
  { name: "Turkish ", logo: "src/assets/Turkish_Cuisine.png" },
  { name: "Breakfast", logo: "src/assets/Breakfast_Cuisine.png" },
  { name: "Mexican", logo: "src/assets/Mexican_Cuisine.png" },
];

const Categories = () => {
  const onClickHandler = (name) => {
    <Navigate to="" />;
  };
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-start">Categories</h2>
      <div className="mt-10 overflow-x-auto grid grid-cols-4 w-max gap-2 gap-x-36">
        {categories.map((category) => (
          <IndividualCategory
            onClick={onClickHandler}
            name={category.name}
            logo={category.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
