import Categories from "../compoments/Categories";
import MainNavigation from "../compoments/UI/MainNavigation";
import SearchBar from "../compoments/UI/SearchBar";

const MainPage = () => {
  return (
    <div className="mt-10 text-center">
      <h1 className="capitalize font-bold text-2xl text-center text-white">
      Reserve your <span className=" bg-clip-text bg-gradient-to-r from-accentprimary to-   text-transparent">place</span> at the finest establishments in town and dine with
        happiness
      </h1>
      <SearchBar />
      <Categories />
      <img className="" src="src/assets/fancy-dinner.jpg" />
    </div>
  );
};

export default MainPage;
