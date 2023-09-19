import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return <div>
    <p>Name</p>
    <p>{authCtx.user.name} {authCtx.user.lastName}</p>
    <p>Email</p>
    <p></p>
  </div>;
};

export default PersonalInformation;
