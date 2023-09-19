import { useContext, useEffect } from "react";
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
    useEffect( ()=>{
        const getData = async ()=>{
            reservations=await useHttp(request);
        }
        if(reservations===undefined){
            getData();
        }
    },[])
    
    console.log(reservations);
};

export default UpcomingReservations;
