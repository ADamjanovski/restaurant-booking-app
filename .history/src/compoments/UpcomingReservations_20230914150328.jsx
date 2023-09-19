import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

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
      console.log(gottenReservations);
      setIsLoading(false);
      setReservations(gottenReservations);
      // console.log(reservations);
    };
    if (reservations === undefined) {
      getData();
    }
  }, [reservations]);
  return (
    <div className="md:w-8/12 md:m-auto">
      <Card>
        <table className="w-full border-spacing-3 border-collapse ">
          <thead>
            <tr className="">
              <th className="border font-medium border-neutral-500">
                Restaurant
              </th>
              <th className="border font-medium border-neutral-500">
                DateTime
              </th>
              <th className="border font-medium border-neutral-500">Table</th>
              <th className="border font-medium border-neutral-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.map((reservation) => {
                const date = new Date(reservation.datetime);
                return (
                  <tr key={reservation.id}>
                    <td className="text-center">
                      {reservation.restaurant.name}
                    </td>
                    <td className="text-center">{date.toDateString()}</td>
                    <td className="text-center">{reservation.tableId}</td>
                    <td className="text-center text-sm">
                      {reservation.status}
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {reservations && reservations.length === 0 && (
            <p>No upcoming reservations!!</p>
          )}
        </table>
      </Card>
    </div>
  );
};

export default UpcomingReservations;
