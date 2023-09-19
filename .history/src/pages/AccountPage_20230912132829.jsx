import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <MainNavigation />
      {ctx.user == undefined && <p className="">Is Loading</p className="">}
      {ctx.user && (
        <div className="flex flex-col items-start ">
          <p className="text-xs mb-10">Home/Account</p>
          <p className="">My Profile</p className="">
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
