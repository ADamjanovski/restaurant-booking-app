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
      <table className="w-full">
        <thead>
        <tr className="">
          <th className="border font-medium border-neutral-500">
            Restaurant
          </th>
          <th className="border font-medium border-neutral-500">DateTime</th>
          <th className="border font-medium border-neutral-500">Table</th>
        </tr></thead>
      <tbody>
        {reservations &&
          reservations.map((reservation) => {
            const date = new Date(reservation.datetime);
            console.log(date.getDate);
            return (
              <tr>
                <td>{reservation.restaurant.name}</td>
                <td>
                  {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
                </td>
                <td>{reservation.tableId}</td>
              </tr>
            );
          })}
      </tbody>
      </table>

    </div>
  );
};

export default UpcomingReservations;
