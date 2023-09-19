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
    <div className="table-fixed border-spacing-3 border-collapse w-full">
      <p>HERE</p>
      <table>
        <tr className="font-medium">
          <th className="border border-neutral-500">Restaurant Name</th>
          <th className="border border-neutral-500">DateTime</th>
          <th className="border border-neutral-500">Table</th>
        </tr>
      </table>
      {reservations &&
        reservations.map((reservation) => (
          <tr>
            <td>{reservation.restaurant.name}</td>
            <td>{}</td>
            <td>{reservation.tableId}</td>
          </tr>
        ))}
    </div>
  );
};

export default UpcomingReservations;
