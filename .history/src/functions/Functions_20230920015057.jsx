import { useHttp } from "../hooks/useHttp";

export const SetRating = (userId, token, restaurantId, rating) => {
  try {
    const data = useHttp({
      url: `https://restaurant-booking-backend-damjanovski.onrender.com/api/restaurants/rating`,
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
      url: `https://restaurant-booking-backend-damjanovski.onrender.com/api/restaurants/images?restaurantId=${restaurantId}`,
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

export const getUserRating = async (userId, restaurantId) => {
  try {
    const data = await useHttp({
      url: `https://restaurant-booking-backend-damjanovski.onrender.com/api/restaurants/rating/${userId}?restaurantId=${restaurantId}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (data === null) {
      return 0;
    }
    return data;
  } catch (err) {
    alert(err);
  }
};

export const getBiggsetTable = async (restaurantId) => {
  try {
    const data = await useHttp({
      url: `https://restaurant-booking-backend-damjanovski.onrender.com/api/restaurants/biggestTable/${restaurantId}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (data === null) {
      return 0;
    }
    return data;
  } catch (err) {
    alert(err);
  }
};
