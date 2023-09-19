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
      <h2 className="-m-1 text-2xl text-start">Categories</h2>
      <div className="w-full overflow-x-auto">
        <div className="-m-1 mt-5  overflow-x-auto grid w-max grid-cols-4 sm:w-full gap-2 ">
          {categories.map((category) => (
            <IndividualCategory
              onClick={onClickHandler}
              name={category.name}
              logo={category.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
