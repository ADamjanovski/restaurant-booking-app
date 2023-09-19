import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const user = await ctx.getUserData();
  console.log("here");
  console.log(user);
  return (
    <>
      <MainNavigation />
      <div>
        <h1>{user.name}</h1>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
