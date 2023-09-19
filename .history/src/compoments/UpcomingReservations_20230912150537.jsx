import { useContext } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";

const UpcomingReservations = () => {
    const authCtx=useContext(AuthContext);
    const data={
        url :  `http://localhost:3000/api/restaurants/upcomingReservatons/${authCtx.user.id}`,
        method: ""
    }
    const reservations=useHttp()

};

export default UpcomingReservations;
