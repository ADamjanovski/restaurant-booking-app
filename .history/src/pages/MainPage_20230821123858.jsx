import Categories from "../compoments/Categories";
import SearchBar from "../compoments/UI/SearchBar";

const MainPage = () => {
  return (
    <div className="mt-10 text-center">
      <h1 className="capitalize font-bold text-2xl text-center text-white">
      Reserve your <span className=" bg-clip-text bg-gradient-to-r from-accent to-primary  text-transparent">place</span> at the finest establishments in town and dine with
        happiness
      </h1>
      <SearchBar />
      <Categories />
      <img className="absolute w-full p-none  mt-5" src="src/assets/fancy-dining-2.jpg" />
    </div>
  );
};

export default MainPage;
