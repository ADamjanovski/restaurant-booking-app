import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MainNavigation from "./compoments/UI/MainNavigation";
import Footer from "./compoments/UI/Footer";
import RestaurantList from "./pages/RestaurantList";

function App() {

  return (
    <div className="w-full">
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true}/>}/>
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/restaurants" element={<RestaurantList />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
