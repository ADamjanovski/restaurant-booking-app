import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  let user;
  const gettingData = () => {
    // setIsLoading(true);
    ctx.getUserData().then((data) => {
      user = data;
      // setIsLoading(false);
    });
  };
  useEffect(() => {
    gettingData();
  }, [user]);
  if (user) {
    console.log("here");
    console.log(user);
  }
  return (
    <>
      <MainNavigation />
      {/* {isLoading && <h1>Is Loading</h1>} */}
      {user && (
        <div>
          {console.log(user)}
          <h1>{user.name}</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
