import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="text-start">
      <p className="border-neutral-600 border-b p">Name</p>
      <p>
        {authCtx.user.name} {authCtx.user.lastName}
      </p>
      <p className="border-neutral-600 border-b">Email</p>
      <p>{authCtx.user.email}</p>
      <p className="border-neutral-600 border-b">Change Password</p>
      <form>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </div>
  );
};

export default PersonalInformation;
