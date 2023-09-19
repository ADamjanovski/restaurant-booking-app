import Categories from "../compoments/Categories";
import SearchBar from "../compoments/UI/SearchBar";
import React from "react";
import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
const MainPage =async () => {
  try {
    const data = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: "andrej123",
        password: "andrej123",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const user = await data.json();
    setToken(null);
    setRefreshToken(null);
    localStorage.setItem("authToken", token);
    id = user.id;
  } catch (err) {
    throw err;
  }
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="mt-10 text-center ">
        <div className="mx-auto w-[85%]">
        <div className="">
          <h1 className="capitalize font-semibold text-2xl text-center text-white px-8 md:w-3/6 lg:w-5/12 mx-auto max-w-8 text-wrap">
            Reserve your{" "}
            <span className="capitalize bg-clip-text bg-gradient-to-r from-accent to-primary  text-transparent">
              place
            </span>{" "}
            at the finest establishments in town and dine with happiness
          </h1>
        </div>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <Categories />
        </div>
        <div className=" bg-secondary opacity-50">
          <img
            className="md:object-cover md:object-top-left md:h-[700px]  w-screen p-none  mt-10 "
            src="src/assets/fancy-dining-2.jpg"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
