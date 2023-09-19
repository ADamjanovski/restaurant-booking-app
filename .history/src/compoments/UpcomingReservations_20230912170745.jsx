import { useContext, useEffect ,useState} from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";

const UpcomingReservations = () => {
    const authCtx=useContext(AuthContext);
    const [isLoading,setIsLoading]=useState(false);
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
            setIsLoading(true);
            const gottenReservations=await useHttp(request);
            setIsLoading(false);
            return gottenReservations;            
            // console.log(reservations);
        }
        if(reservations===undefined){
            reservations=getData();
        }
    },[reservations])

    console.log(reservations);
};

export default UpcomingReservations;
