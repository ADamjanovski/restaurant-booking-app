import { useRef } from "react";
import { useHttp } from "../hooks/useHttp";
import Card from "../compoments/UI/Card";

const BecomePartner = () => {
  const restaurantName = useRef();
  const email = useRef();
  const description = useRef();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const request = await useHttp({
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
    <Card>
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <label className="m-2 ">Restaurant Name</label>
        <input type="text" placeholder="Restaurant Name" className="m-2 p-2"/>
        <label className="m-2">Email</label>
        <input type="email" className="m-2" placeholder="email" />
        <label className="m-2">Description of your restaurant</label>
        <textarea placeholder="Description" className="m-2"/>
        <button className="m-2">Submit Request</button>
      </form>
    </Card>
  );
};

export default BecomePartner;
