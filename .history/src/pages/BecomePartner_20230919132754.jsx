import { useRef } from "react";
import { useHttp } from "../hooks/useHttp";
import Card from "../compoments/UI/Card";

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
    <Card></Card>
    <form onSubmit={formSubmitHandler}>
    
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
