import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useContext, useState, useRef } from "react";
import RestaurantsContext from "../context/restaurants-context";
import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import Card from "../compoments/UI/Card";
import Carousel from "nuka-carousel"
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
    setHasError(false);
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
    if (tables.length > 0) {
      setTables(tables);
    } else {
      setHasError(true);
    }
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
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <Carousel>
        <img src="https://lh3.googleusercontent.com/pw/AIL4fc-Io5xl8-nA1kTMRdFzKOmqSvCH4BchltiQk7whBERYpM7L6gcPsOlbQON39_2vG08cZN9pg4RPCYgOxF8dd8PRzjW_LcO80vc3FxKiZ5EknjlSPeVH-4mZlKCIXgOLzmeRg1U2gIrlof0QAn4RkTeWkn2oOf1udUjkXOtnlBPvGIfB3PDFCMCicH1PItfFEJ81HpRE0_ok8pKy0J8CMW6xD0lphkJsunqPOpoHGs3N0_ObqRUyfA4liPUTyk0gCCD1giqev9wBIFiEOvRlBVWmTUChgrieoqQ3QhExb_8L83Z5tj0mBrWGmxyzX2rdasDTgnpVaVzz4xz1WI1PaRaaDHC5UTotOYKnNoTpZ_ymQ_4eWwc72E4peTyi5GEkrh-jYspfkvk0eXL71rWFopQ8bwyQEXTZxIwVOy74ghCcn1Ny5UAu0ByMjSPlI6rxCKOyJaPlpO1fXW0oE51UBsIvRBHa5CUx-gncNlYyBSmuV8N5x0NOoAMdFHiZanFZJgf0Wj5sFoepRSybiG451_joKGqVfPGv3XnRSffQR1Sg9lSs9svCoDcAS3i3fnAfDIbiTFqDkB5VEKo83DPp-UopU9NxnjKWZoo_qWMsvphvoXkXvaAdvc_rJY9K8pHgd8epoGa-kDMfK-UZKdsG6oSFmlea4nOl7NC_qJXaWj59YPldoRMaXAUfWF2N_BIcZWWkK_Z0Xs04gaQcYeat92T6fJr10tIFSLcCfHKverwgh9sdQ1DIEHYzFic0yaKxXmPzyYHoO5t-lqH-W1lMVTr5u7zb6beyYhbg7-fnKd-54zr51Ca0MAnf5i8dE4njgeKoeU_Mss4gDEV0l77eme57R1egXjN6AALaEgeoi3exSuhFmNvv2nDESk7BmoDgL8l-pOE_0hPdPRl70x40SbF_=w1440-h938-s-no?authuser=0" alt="photo"/>
        <img src="" alt="photo2"/>
      </Carousel>
      <Card>
        <form onSubmit={findTableHandler} className="flex flex-col ">
          <label htmlFor="date " className="mx-3">
            Choose Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="mx-3 my-1 rounded-md"
            ref={dateRef}
          />
          <label htmlFor="seats " className="mx-3">
            Enter number of people:
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            className="mx-3 my-1 rounded-md p-1"
            max={16}
            ref={numberRef}
          />
          <button className="m-3 bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 ">
            Find Table
          </button>
        </form>
        <div className="flex flex-col ">
          {tables.length > 0 && (
            <p className="text-lg text-center">
              We have {tables.length} tables left.
            </p>
          )}
          {hasError && <p>Sorry, We have no tables left for that date!!</p>}
          {tables.length > 0 && (
            <button
              className="bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 "
              onClick={reserveHandler}
            >
              Reserve your Place
            </button>
          )}
        </div>
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
