import Categories from "../compoments/Categories";
import SearchBar from "../compoments/UI/SearchBar";

const MainPage = () => {
  return (
    <div className="mt-10 text-center ">
      <div className="relative">
        <h1 className="capitalize font-bold text-2xl text-center text-white px-8">
          Reserve your{" "}
          <span className="capitalize bg-clip-text bg-gradient-to-r from-accent to-primary  text-transparent">
            place
          </span>{" "}
          at the finest establishments in town and dine with happiness
        </h1>
        <div className=" bg-secondary opacity-50 overflow-hidden absolute -z-10">
          <img
            className="absolute left-0 top-0 h-max w-screen p-none z-10"
            src="src/assets/fancy-dining-2.jpg"
          />
        </div>
      </div>
      <SearchBar />
      <Categories />
    </div>
  );
};

export default MainPage;
