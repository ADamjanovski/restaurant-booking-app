import { useContext } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";

const UpcomingReservations = () => {
    const authCtx=useContext(AuthContext);
    let reservations;
    const request={
        url :  `http://localhost:3000/api/restaurants/upcomingReservations/${authCtx.user.id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${authCtx.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
    }
    useHttp(request).then( data =>{
        reservations=data;
    });
    console.log(reservations);
    return (
        
    )
};

export default UpcomingReservations;
