import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { useHttp } from "../hooks/useHttp";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState,useContext } from "react";
const ShowcaseTables = ({ tables,date }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [reserveError, setReserveError] = useState({
    hasError: false,
    message: "",
  });
  const { restraurantId } = useParams();
  const authCtx = useContext(AuthContext);
  const reserveHandler = async () => {
    try {
      setIsLoading(true);
      const data = await useHttp({
        url: "http://localhost:3000/api/restaurants/reservation",
        method: "POST",
        body: JSON.stringify({
          restaurantId: +restraurantId,
          tableId: +tables[0].id,
          id: +authCtx.user.id,
          datetime: new Date(date),
        }),
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      setIsLoading(false);
      setReserved(true);
    } catch (err) {
      setIsLoading(false);
      setReserveError({
        hasError: true,
        message: err.message,
      });
    }
  };
  return (
    <div className="flex flex-col ">
      {isLoading && <CircularProgress />}
      {tables.length > 0 && (
        <p className="text-lg text-center">
          We have {tables.length} tables left.
        </p>
      )}
      {tables.length > 0 && (
        <button
          className="bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 "
          onClick={reserveHandler}
        >
          Reserve your Place
        </button>
      )}
      {reserved && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your table is reserved. Check your account page for confirmation from
          the restaurant!!!
        </Alert>
      )}
      {reserveError.hasError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {reserveError.message}
        </Alert>
      )}{" "}
    </div>
  );
};

export default ShowcaseTables;
