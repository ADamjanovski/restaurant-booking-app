import { useContext } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";

const UpcomingReservations = () => {
    const authCtx=useContext(AuthContext);
    const data={
        url :  `http://localhost:3000/api/restaurants/upcomingReservations/${authCtx.user.id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${authCtx.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
    }
    const reservations=useHttp(data);
    
    return (
        
    )
};

export default UpcomingReservations;
