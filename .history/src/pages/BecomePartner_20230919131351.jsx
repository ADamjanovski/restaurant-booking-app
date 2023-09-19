import { useRef } from "react";

const BecomePartner = () => {
  const restaurantName = useRef();
  const email = useRef();
  const description = useRef();
  const formSubmitHandler = ()

  return (
    <form>
      <label>Restaurant Name</label>
      <input type="text" placeholder="Restaurant Name" />
      <label>Email</label>
      <input type="email" placeholder="email" />
      <label>Description of your restaurant</label>
      <textarea placeholder="Description" />
    </form>
  );
};

export default BecomePartner;
