import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { useHttp } from "../hooks/useHttp";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState, useContext } from "react";
import { CircularProgress } from "@mui/material";
import Modal from "@mui/material/Modal";

const ShowcaseTables = ({ tables, date }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [reserveError, setReserveError] = useState({
    hasError: false,
    message: "",
  });
  const handleClose = () => setReserved(false);
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
      if (data.message !== undefined) {
        setIsLoading(false);
        setReserveError({
          hasError: true,
          message: data.message,
        });
        return;
      }
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
          disabled={!authCtx.isLoggedIn}
          className="bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 disabled:bg-neutral-500 "
          onClick={reserveHandler}
        >
          Reserve your Place
        </button>
      )}
      {reserved && (
        <Modal
          open={reserved}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute top-[15%] sm:left-[10%] left-[3%] lg:left-[35%] md:w-[600px] w-3/4 m-10 border-2 border-neutral-400 bg-secondary">
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Your table is reserved. Check your account page for confirmation
              from the restaurant!!!
            </Alert>
          </div>
        </Modal>
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
