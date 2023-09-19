import MainNavigation from "../compoments/UI/MainNavigation";
import Footer from "../compoments/UI/Footer";
import { useContext, useLayoutEffect } from "react";
import AuthContext from "../context/auth-context";
const AccountPage = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  let user;
  useLayoutEffect(() => {
    ctx.getUserData().then((data) => {
      user = data;
    });
  }, [user]);

  return (
    <>
      <MainNavigation />
      {isLoading && <h1>Is Loading</h1>}
      {user && <div><h1>{user.name}</h1>  </div>}
      <Footer />
    </>
  );
};

export default AccountPage;
