import { useHttp } from "../hooks/useHttp";

export const SetRating = (userId, restaurantId, rating) => {
  const data = useHttp({
    url: `http://localhost:3000/api/restaurants/rating?id=${userId}&&rating]${rating}&&restaurantId=${restaurantId}`,
    body : JSON.stringify{
        id :userId,
        restaurantId : restaurantId,
        rating : rating,
    }
  });
};
