import { useHttp } from "../hooks/useHttp";

export const SetRating = (userId, token, restaurantId, rating) => {
  try {
    const data = useHttp({
      url: `http://localhost:3000/api/restaurants/rating`,
      body: JSON.stringify({
        id: userId,
        restaurantId: restaurantId,
        rating: rating,
      }),
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    alert(err);
  }
};

export const getImages = (restaurantId) => {
  try {
    const data = useHttp({
      url: `http://localhost:3000/api/restaurants/images?restaurantId=${restaurantId}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (data.message !== undefined) {
      alert(data.message);
      return;
    }
    return data;
  } catch (err) {
    alert(err.message);
  }
};

export const getUserRating = (userId, restaurantId) => {
  try {
    const data = useHttp({
      url: `http://localhost:3000/api/restaurants/rating/${userId}?restaurantId=${restaurantId}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    if(data===null){
        data=0
    }
    return data;
  } catch (err) {
    alert(err);
  }
};
