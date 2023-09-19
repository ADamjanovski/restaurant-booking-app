import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const user=ctx.getUserData();
  return (
    <>
      <MainNavigation />
      <Footer />
    </>
  );
};

export default AccountPage;
