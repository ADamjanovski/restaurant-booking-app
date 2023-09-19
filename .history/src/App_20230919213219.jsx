import "./App.css";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import IndividualRestaurant from "./pages/IndividualRestaurant";
import AccountPage from "./pages/AccountPage";
import PersonalInformation from "./compoments/PersonalInformation";
import UpcomingReservations from "./compoments/UpcomingReservations";
import Footer from "./compoments/UI/Footer";
import MainNavigation from "./compoments/UI/MainNavigation";
import BecomePartner from "./pages/BecomePartner";
import ContactUs from "./pages/ContactUs";

function App() {

  return (
    <div className="w-full">
      <main>
        <MainNavigation />

        <Routes>
          <Route path="/account" element={<AccountPage />}>
            <Route
              path="personalInformation"
              element={<PersonalInformation />}
            ></Route>
            <Route
              path="reservations"
              element={<UpcomingReservations />}
            ></Route>
          </Route>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
          <Route path="/restaurants" element={<RestaurantList />}></Route>
          <Route
            path="/restaurants/:restraurantId"
            element={<IndividualRestaurant />}
          ></Route>
          <Route path="/becomePartner" element={<BecomePartner />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer scrollbar={hasScrollbar} />
      </main>
    </div>
  );
}

export default App;
