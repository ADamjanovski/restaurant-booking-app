import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext } from "react";
const AccountPage = () => {
    const ctx=useContext(Auth)
  return (
    <>
      <MainNavigation />
      <Footer />
    </>
  );
};

export default AccountPage;
