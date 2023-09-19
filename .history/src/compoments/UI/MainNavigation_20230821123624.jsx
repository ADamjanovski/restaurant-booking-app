import ReactLogo from "../../assets/logo.svg";
import YourSVGComponent from "../../assets/Reactlogo";
import { NavLink, Route } from "react-router-dom";
import UserIcon from "../../assets/User.jsx";
const MainNavigation = () => {
  return (
    <header className="flex justify-between w-full">
      <div className="w-"><YourSVGComponent /></div>
      <nav className="w-5/12 mt-3">
        <NavLink className="flex  justify-between rounded-2xl border-neutral-500 border-solid border-2 " to="login">{<UserIcon/>}<span className=" ml-2
         font-sans">Log In</span></NavLink>
        {false && <NavLink to="account">{UserIcon} Account</NavLink>}
      </nav>
    </header>
  );
};

export default MainNavigation;
