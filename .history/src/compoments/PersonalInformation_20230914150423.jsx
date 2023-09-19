import { useContext } from "react";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const PersonalInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="md:w-8/12 md:m-auto">
      <Card className="text-start ">
        <p className="border-neutral-600 border-b py-1 px-2">Name</p>
        <p className="py-1 px-2">
          {authCtx.user.name} {authCtx.user.lastName}
        </p>
        <p className="border-neutral-600 border-b py-1 px-2">Email</p>
        <p className="px-2">{authCtx.user.email}</p>
        <p className="border-neutral-600 border-b py-1 px-2">Change Password</p>
        <form className="mt-3">
          <input
            type="password"
            className="mb-2 rounded-md px-3 py-1"
            placeholder="New Password"
          />
          <input
            type="password"
            className="px-3 py-1 rounded-md"
            placeholder="Confirm Password"
          />
        </form>
      </Card>
    </div>
  );
};

export default PersonalInformation;
