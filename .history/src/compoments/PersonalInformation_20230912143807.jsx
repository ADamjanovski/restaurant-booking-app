import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return <div>
    <p>Name</p>
    <p>{authCtx.user.name} </p>
  </div>;
};

export default PersonalInformation;
