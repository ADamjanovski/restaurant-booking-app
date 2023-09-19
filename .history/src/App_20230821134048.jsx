import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./compoments/UI/MainNavigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
      <
    </div>
  );
}

export default App;
