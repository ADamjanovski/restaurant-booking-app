import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(ctx.user);
  return (
    <>
      <MainNavigation />
      {ctx.user == undefined && <h1>Is Loading</h1>}
      {ctx.user && (
        <div>
          <h3>Home/</h3>
          <h1>My Profile</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
