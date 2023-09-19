import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useContext, useState, useRef } from "react";
import RestaurantsContext from "../context/restaurants-context";
import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { Carousel } from "3d-react-carousal";
let slides = [
  <img src="https://picsum.photos/800/300/?random" alt="1" />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />,
];
const IndividualRestaurant = () => {
  const { restraurantId } = useParams();
  const ctx = useContext(RestaurantsContext);
  const authCtx = useContext(AuthContext);
  const dateRef = useRef();
  const numberRef = useRef();
  const [tables, setTables] = useState([]);
  const [hasError, setHasError] = useState(false);
  const findTableHandler = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:3000/api/restaurants/tables", {
      method: "POST",
      body: JSON.stringify({
        id: +restraurantId,
        seats: +numberRef.current.value,
        datetime: new Date(dateRef.current.value),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const tables = await data.json();
    setTables(tables);
  };
  const reserveHandler = async () => {
    //  ctx.getSingleRestaurant(+restraurantId);
    const data = await fetch(
      "http://localhost:3000/api/restaurants/reservation",
      {
        method: "POST",
        body: JSON.stringify({
          restaurantId: +restraurantId,
          tableId: +tables[0].id,
          id: +authCtx.user.id,
          datetime: new Date(dateRef.current.value),
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const answer = await data.json();
    console.log(answer);
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <Carousel slides={slides} autoplay={true} interval={1000}/>

      <form
        onSubmit={findTableHandler}
        className="flex flex-col justify-center items-center"
      >
        <input type="date" className="w-1/2 text-center" ref={dateRef} />
        <input type="number" max={16} ref={numberRef} />
        <button>Find Table</button>
      </form>
      {tables.length > 0 && <p>We have {tables.length} tables left.</p>}
      {tables.length > 0 && (
        <button onClick={reserveHandler}>Reserve your Place</button>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
