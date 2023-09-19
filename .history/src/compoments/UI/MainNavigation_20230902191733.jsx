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
          {<NavLink
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
          </NavLink>}
          {ctx.isLoggedIn && <NavLink to="account">{UserIcon} Account</NavLink>}
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
