import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext } from "react";
const AccountPage = () => {
    const ctx=useContext()
  return (
    <>
      <MainNavigation />
      <Footer />
    </>
  );
};

export default AccountPage;
