import YourSVGComponent from "../../assets/Reactlogo";
import { NavLink, Route } from "react-router-dom";
import UserIcon from "../../assets/User.jsx";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className="md:text-center w-full p-8  mx-auto sm:px-32">
      <div className="flex justify-between ">
        <NavLink to={"/home"} className="w-full">
          <YourSVGComponent />
        </NavLink>
        <nav className="w-min mt-3">
          {!ctx.isLoggedIn && (
            <NavLink
              className="flex w-28 justify-around rounded-2xl border-neutral-500 border-solid border-2 p-2.5 sm:w-36   "
              to="/login"
            >
              {<UserIcon />}
              <span
                className=" ml-1 
         font-sans"
              >
                Log In
              </span>
            </NavLink>
          )}
          {ctx.isLoggedIn && (
            <NavLink
              className="flex w-14 md:w-28 justify-around rounded-2xl  border-neutral-500 border-solid border-2 p-2.5 sm:w-36   "
              to="account"
            >
              {<UserIcon />} <span className="hidden md:inline">Account</span>
            </NavLink>
          )}
        </nav>
        {ctx.isLoggedIn && <button type="button" className="m-3 rounded-2xl  border-neutral-500 border-solid border-2 p-2.5 sm:w-36">Log Out</button>}
      </div>
    </header>
  );
};

export default MainNavigation;
