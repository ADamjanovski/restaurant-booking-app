import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const getData = async () => {
    const data= await ctx.getUserData();
  };

  const user = getData();

  console.log(user);
  return (
    <>
      <MainNavigation />
      <div>{/* <h1>{user.name}</h1> */}</div>
      <Footer />
    </>
  );
};

export default AccountPage;
