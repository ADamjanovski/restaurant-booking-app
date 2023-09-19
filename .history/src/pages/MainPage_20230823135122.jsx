import Categories from "../compoments/Categories";
import SearchBar from "../compoments/UI/SearchBar";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
const MainPage = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="mt-10 text-center ">
        <div className="">
          <h1 className="capitalize font-semibold text-2xl text-center text-white px-8 sm:w-1/2 mx-auto max-w-8 text-wrap">
            Reserve your{" "}
            <span className="capitalize bg-clip-text bg-gradient-to-r from-accent to-primary  text-transparent">
              place
            </span>{" "}
            at the finest establishments in town and dine with happiness
          </h1>
        </div>
        <SearchBar />
        <Categories />
        <div className=" bg-secondary opacity-50">
          <img
            className=" w-screen p-none  mt-10 "
            src="src/assets/fancy-dining-2.jpg"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
