import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = async () => {
  const ctx = useContext(AuthContext);
  const user = ctx.getUserData().then(() => {
    console.log(user);
  });
  return (
    <>
      <MainNavigation />
      <div>
        {/* <h1>{user.name}</h1> */}
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
