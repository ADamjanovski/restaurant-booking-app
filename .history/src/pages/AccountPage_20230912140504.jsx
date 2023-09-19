import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
import { Outlet, Link } from "react-router-dom";

const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(ctx.user);
  return (
    <>
      <MainNavigation />
      {ctx.user == undefined && <p className="text-2xl ">Is Loading</p>}
      {ctx.user && (
        <div>
          <div className="flex flex-col items-start ml-3">
            <p className="text-xs mb-8">Home/Account</p>
            <p className="text-2xl">My Profile</p>
          </div>
          <div>
            <Link to="personalInformation">Account Details</Link>
            <Link to="reservations">Upcoming Reservations</Link>
          </div>
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
