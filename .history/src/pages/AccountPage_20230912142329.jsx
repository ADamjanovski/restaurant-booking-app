import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
import { Outlet, NavLink } from "react-router-dom";

const AccountPage = () => {
  const ctx = useContext(AuthContext);
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
          <div className="mt-4 border-neutral-600 border-b flex pb-0">
            <NavLink
              to="personalInformation"
              className={({ isActive }) =>
                isActive ? "border-accent border-b-4 m-3 ml-0 px-4 " : " m-3 ml-0 px-4 "
              }
            >
              Account Details
            </NavLink>
            <NavLink
              to="reservations"
              className={({ isActive }) =>
                isActive ? "border-accent border-b-4 m-3 ml-0 px-4 " : "m-3 ml-0 px-4"
              }
            >
              Upcoming Reservations
            </NavLink>
          </div>
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
