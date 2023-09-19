import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useLayoutEffect, useState } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  let user;
  useLayoutEffect(() => {
    
    ctx.getUserData().then((data) => {
      user = data;
      setIsLoading(false);
    });
  }, [user]);
  if (user) {
    console.log(user);
  }
  return (
    <>
      <MainNavigation />
      {isLoading && <h1>Is Loading</h1>}
      {user && (
        <div>
          {console.log(user)}
          <h1>{user}</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccountPage;
