import { useContext } from "react";
import AuthContext from "../context/auth-context";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="text-start">
      <p className="border-neutral-600 border-b py-1 px-2">Name</p>
      <p className="py-1 px-3">
        {authCtx.user.name} {authCtx.user.lastName}
      </p>
      <p className="border-neutral-600 border-b py-1 px-2">Email</p>
      <p>{authCtx.user.email}</p>
      <p className="border-neutral-600 border-b py-1 px-3">Change Password</p>
      <form>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </div>
  );
};

export default PersonalInformation;
