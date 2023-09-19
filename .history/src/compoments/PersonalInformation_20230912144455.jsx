import { useContext } from "react";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className="text-start">
      <p className="border-neutral-600 border-b py-1 px-2">Name</p>
      <p className="py-1 px-3">
        {authCtx.user.name} {authCtx.user.lastName}
      </p>
      <p className="border-neutral-600 border-b py-1 px-2">Email</p>
      <p>{authCtx.user.email}</p>
      <p className="border-neutral-600 border-b py-1 px-2">Change Password</p>
      <form>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </Card>
  );
};

export default PersonalInformation;
