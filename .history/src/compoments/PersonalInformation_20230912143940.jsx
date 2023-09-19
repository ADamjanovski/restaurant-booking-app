import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div c>
      <p>Name</p>
      <p>
        {authCtx.user.name} {authCtx.user.lastName}
      </p>
      <p>Email</p>
      <p>{authCtx.user.email}</p>
      <p>Change Password</p>
      <form>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </div>
  );
};

export default PersonalInformation;