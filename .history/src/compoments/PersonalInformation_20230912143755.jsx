import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return <div>
    <p>Name</p>
  </div>;
};

export default PersonalInformation;
