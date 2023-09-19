import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./compoments/UI/MainNavigation";
import Footer from "./compoments/UI/Footer";
import RestaurantList from "./pages/RestaurantList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/restaurants" element={<RestaurantList />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
