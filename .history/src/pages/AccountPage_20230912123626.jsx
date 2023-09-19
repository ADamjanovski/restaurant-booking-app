import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useLayoutEffect } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  let user;
  useLayoutEffect(() => {
    ctx.getUserData().then((data) => {
      user = data;
    });
  }, [user]);

  console.log(user);
  return (
    <>
      <MainNavigation />
      <div>
        {/* <h1>{user.name}</h1>   */}
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
