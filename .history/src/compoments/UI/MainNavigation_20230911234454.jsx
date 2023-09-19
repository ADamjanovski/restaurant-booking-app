import YourSVGComponent from "../../assets/Reactlogo";
import { NavLink, Route } from "react-router-dom";
import UserIcon from "../../assets/User.jsx";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  const navigate=useNav
  const logoutHandler = () => {
    ctx.logout(ctx.id);

  };
  return (
    <header className="md:text-center w-full p-8  mx-auto sm:px-32">
      <div className="flex justify-between ">
        <NavLink to={"/home"} className="w-full">
          <YourSVGComponent />
        </NavLink>
        <nav className="w-min mt-3 flex ">
          {!ctx.isLoggedIn && (
            <NavLink
              className="flex w-28 h-12 justify-around rounded-2xl border-neutral-500 border-solid border-2 p-2.5 sm:w-36   "
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
              className="flex w-14 h-12 md:w-28 justify-around rounded-2xl  border-neutral-500 border-solid border-2 p-2.5 sm:w-36   "
              to="/account"
            >
              {<UserIcon />} <span className="hidden md:inline">Account</span>
            </NavLink>
          )}
          {ctx.isLoggedIn && (
            <button
              type="button"
              onClick={logoutHandler}
              className="ml-3 h-12 bg-accent text-black rounded-2xl  border-neutral-500 border-solid border-2 w-20  md:w-36"
            >
              Log Out
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
