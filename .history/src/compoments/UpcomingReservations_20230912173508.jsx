import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";

const UpcomingReservations = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState();
  const request = {
    url: `http://localhost:3000/api/restaurants/upcomingReservations/${authCtx.user.id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const gottenReservations = await useHttp(request);
      setIsLoading(false);
      setReservations(gottenReservations);
      // console.log(reservations);
    };
    if (reservations === undefined) {
      getData();
    }
  }, [reservations]);
  console.log(reservations);
  return (
    <div className="table-fixed border-spacing-3 border-collapse ">
      <p>HERE</p>
      <table>
        <tr className="font-medium">
          <th className="">Restaurant Name</th>
          <th>DateTime</th>
          <th>Table</th>
        </tr>
      </table>
      {reservations &&
        reservations.map((reservation) => (
          <div className="">
            <p>{reservation.id}</p>
          </div>
        ))}
    </div>
  );
};

export default UpcomingReservations;