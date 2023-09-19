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
      {ctx.user == undefined && <h1>Is Loading</h1>}
      {ctx.user && (
        <div className="flex flex-col items-start ">
          <p className="text-xs mb-10">Home/Account</p>
          <h1>My Profile</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
