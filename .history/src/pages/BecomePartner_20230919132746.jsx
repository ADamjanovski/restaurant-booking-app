import { useRef } from "react";
import { useHttp } from "../hooks/useHttp";

const BecomePartner = () => {
  const restaurantName = useRef();
  const email = useRef();
  const description = useRef();
  const formSubmitHandler = async(event) => {
    event.preventDefault();
    const request =await useHttp({
      url: "http://localhost:3000/api/restaurants",
      body: JSON.stringify({
        email: email.current.value,
        name: restaurantName.current.value,
        description: description.current.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
        <Card
      <label>Restaurant Name</label>
      <input type="text" placeholder="Restaurant Name" />
      <label>Email</label>
      <input type="email" placeholder="email" />
      <label>Description of your restaurant</label>
      <textarea placeholder="Description" />
      <button>Submit Request</button>
    </form>
  );
};

export default BecomePartner;
