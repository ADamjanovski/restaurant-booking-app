import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MainNavigation from "./compoments/UI/MainNavigation";
import Footer from "./compoments/UI/Footer";
import RestaurantList from "./pages/RestaurantList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signUp"
    ) {
      setIsLoggingIn(false)
    }else{
      setIsLoggingIn(true)

    }
  },[window.location.pathname]);
  return (
    <div className="w-full">
      {isLoggingIn <MainNavigation />}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
          <Route path="/restaurants" element={<RestaurantList />}></Route>
        </Routes>
      </main>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/signUp" && <Footer />}
    </div>
  );
}

export default App;
