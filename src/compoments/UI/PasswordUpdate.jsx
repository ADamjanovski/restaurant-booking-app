import { useRef, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const PasswordUpdate = ({ userId, token }) => {
  const passwordInput = useRef();
  const [hasError, setHasError] = useState({
    hasError: false,
    message: "",
    title: "",
  });
  const [updatedData, setupdatedData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const confirmpassword = useRef();
  const ChangePasswordHandler = async (event) => {
    event.preventDefault();
    if (
      confirmpassword.current.value !== passwordInput.current.value ||
      passwordInput.current.value.trim("").length == 0
    ) {
      setHasError({
        hasError: true,
        message: " Make sure password and confirm password are indentical !!",
        title: "Wrong Credentials!!",
      }),
        setTimeout(() => {
          setHasError(false);
        }, 5000);
      return;
    }
    setIsLoading(true);
    const data = await useHttp({
      url: "http://localhost:3000/api/dashboard/updatePassword",
      method: "PATCH",
      body: JSON.stringify({
        id: userId,
        password: passwordInput.current.value,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (data.message !== undefined) {
      setIsLoading(false);
      setHasError({
        hasError: true,
        message: data.message,
        title: "Server Error!!",
      });
      setTimeout(() => {
        setHasError(false);
      }, 5000);
      return;
    } else {
      setIsLoading(false);
      setupdatedData(true);
      setTimeout(() => {
        setupdatedData(false);
      }, 5000);
      return;
    }
  };
  return (
    <>
      <form className="mt-3 flex flex-col" onSubmit={ChangePasswordHandler}>
        <input
          type="password"
          className="mb-4  rounded-md px-3 py-1 md:w-3/4"
          placeholder="New Password"
          ref={passwordInput}
        />
        <input
          type="password"
          className="px-3 py-1 rounded-md mb-4 md:w-3/4 "
          placeholder="Confirm Password"
          ref={confirmpassword}
        />
        <button className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2">
          Change Password
        </button>
      </form>
      {hasError.hasError && (
        <Alert severity="error">
          <AlertTitle>{hasError.title}</AlertTitle>
          {hasError.message}
        </Alert>
      )}
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          //   onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {updatedData && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your Password is updated !!
        </Alert>
      )}
    </>
  );
};

export default PasswordUpdate;
