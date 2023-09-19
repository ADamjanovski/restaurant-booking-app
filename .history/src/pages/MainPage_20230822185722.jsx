import Categories from "../compoments/Categories";
import SearchBar from "../compoments/UI/SearchBar";

const MainPage = () => {
  return (
    <div>
    <MainNavigation />
    <div className="mt-10 text-center ">
      <h1 className="capitalize font-semibold text-2xl text-center text-white px-8">
        Reserve your{" "}
        <span className="capitalize bg-clip-text bg-gradient-to-r from-accent to-primary  text-transparent">
          place
        </span>{" "}
        at the finest establishments in town and dine with happiness
      </h1>
      <SearchBar />
      <Categories />
      <div className=" bg-secondary opacity-50">
        <img
          className=" w-screen p-none  mt-10 "
          src="src/assets/fancy-dining-2.jpg"
        />
      </div>
    </div>
  );
};

export default MainPage;
