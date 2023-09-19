import { useHttp } from "../hooks/useHttp";

export const SetRating = (userId, restaurantId, rating) => {
    try{
        const data = useHttp({
            url: `http://localhost:3000/api/restaurants/rating`,
            body: JSON.stringify({
              id: userId,
              restaurantId: restaurantId,
              rating: rating,
            }),
            method: "POST",
            headers: {
              Authorization: `Bearer ${authCtx.token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
    }catch


};

export const getImages= (restaurantId)=>{
    const data = useHttp({
        url: `http://localhost:3000/api/restaurants/rating`,
        body: JSON.stringify({
          id: userId,
          restaurantId: restaurantId,
          rating: rating,
        }),
        method: "POST",
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    
}
