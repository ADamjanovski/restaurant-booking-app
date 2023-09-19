import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useContext, useState, useRef } from "react";
import RestaurantsContext from "../context/restaurants-context";
import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import Card from "../compoments/UI/Card";
import Carousel from "nuka-carousel";
import { Rating } from "@mui/material";
import { useHttp } from "../hooks/useHttp";
const IndividualRestaurant = () => {
  const { restraurantId } = useParams();
  const ctx = useContext(RestaurantsContext);
  const authCtx = useContext(AuthContext);
  const dateRef = useRef();
  const numberRef = useRef();
  const [tables, setTables] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [rating, setRating] = useState(null);
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
    const data = await useHttp({
      url: "http://localhost:3000/api/restaurants/reservation",
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
    });
    // const data = await fetch(
    //   "http://localhost:3000/api/restaurants/reservation",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       restaurantId: +restraurantId,
    //       tableId: +tables[0].id,
    //       id: +authCtx.user.id,
    //       datetime: new Date(dateRef.current.value),
    //     }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const answer = await data.json();
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <div>
        <Carousel>
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc-Io5xl8-nA1kTMRdFzKOmqSvCH4BchltiQk7whBERYpM7L6gcPsOlbQON39_2vG08cZN9pg4RPCYgOxF8dd8PRzjW_LcO80vc3FxKiZ5EknjlSPeVH-4mZlKCIXgOLzmeRg1U2gIrlof0QAn4RkTeWkn2oOf1udUjkXOtnlBPvGIfB3PDFCMCicH1PItfFEJ81HpRE0_ok8pKy0J8CMW6xD0lphkJsunqPOpoHGs3N0_ObqRUyfA4liPUTyk0gCCD1giqev9wBIFiEOvRlBVWmTUChgrieoqQ3QhExb_8L83Z5tj0mBrWGmxyzX2rdasDTgnpVaVzz4xz1WI1PaRaaDHC5UTotOYKnNoTpZ_ymQ_4eWwc72E4peTyi5GEkrh-jYspfkvk0eXL71rWFopQ8bwyQEXTZxIwVOy74ghCcn1Ny5UAu0ByMjSPlI6rxCKOyJaPlpO1fXW0oE51UBsIvRBHa5CUx-gncNlYyBSmuV8N5x0NOoAMdFHiZanFZJgf0Wj5sFoepRSybiG451_joKGqVfPGv3XnRSffQR1Sg9lSs9svCoDcAS3i3fnAfDIbiTFqDkB5VEKo83DPp-UopU9NxnjKWZoo_qWMsvphvoXkXvaAdvc_rJY9K8pHgd8epoGa-kDMfK-UZKdsG6oSFmlea4nOl7NC_qJXaWj59YPldoRMaXAUfWF2N_BIcZWWkK_Z0Xs04gaQcYeat92T6fJr10tIFSLcCfHKverwgh9sdQ1DIEHYzFic0yaKxXmPzyYHoO5t-lqH-W1lMVTr5u7zb6beyYhbg7-fnKd-54zr51Ca0MAnf5i8dE4njgeKoeU_Mss4gDEV0l77eme57R1egXjN6AALaEgeoi3exSuhFmNvv2nDESk7BmoDgL8l-pOE_0hPdPRl70x40SbF_=w1440-h938-s-no?authuser=0"
            alt="photo"
            className=" "
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc8W_Wcr3epvihLZNj7ZjIO8pFFJPP-ReMD-Cpj7zVidsvYqajVFnGmAe6rjLYMnB7YEtshAHK_4ucby8DOFjHe0zo32MutNh4z2AT4FEm86dgtkwRzA7P8_vBOO63vARltFVnppr3mJINrieziPCe4eIBbtuw7Wzdl8AXzpcie6lWmNh7NBw9KeWL718wM8SfDUfke5oKDcYnjK-VFGvk8fNp8BkRLjnwIhwkLASXxqAaEaJVjSVgrhI3IaOBDxcg9XUrqrTHNp4Am2xHlOrPDOEnIOZMUJnXNsIkza0-MD4n8k7brxuqtQpnLdGGHylC-fJFZeewq-Ph8B1d_075NvPSgS8MOtQRSZKee72_Gjpzy4rJZpCP54QV9D0EhzjhrdLwJzNRQ_ydMrOYqGrNr7e50NW92HWRZJWhvK8_XqMx1qdYoa6gw1UxMD_KYR-bpu3Xd6OsfiTuPW5VerB07Z0lVTeo7EHNaWDupDSc6IlvMNtd6wtj5VOZmf9T4konYkOazwk7eVak5vPl-wyVIZL0NPLnB_09JED4BuyMR3_PAjNiIdHYMK1aWKsJ0IgBYFnJHMxU3AjwuCoRPQNZtwvqT-5QfB2CONdvbjaBAParc6XWn1ggYURqMWyK5mE1oBCCETavP7P19aSLl02MHRtUL958WyY5hEnapoo6GNEVqCqvEIOZKCuVOLh-ctgp4GuGLuAR28JCtHAPfXWEZIvGRbehAdaezfNyrv-9Guvv0AcwNXvCNGJAalRpg2aslFHovNz0yav0KR8HVEcfbpXBxDTurA2rlZkMSSH7Ol95rGxnGp9lHES7FKYr16knU8xeqTaZR2uyYb3-g6GzLyAm_Y6rcY5Ov4-Z1YLYDPOzX-njoCK0L6h3JGvGf0F4VIw5787oppqcVJyZtevq9E=w1440-h942-s-no?authuser=0"
            alt="photo2 "
            className=" "
          />
        </Carousel>
      </div>
      <div className="md:w-6/12">
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
            <div className="text-center">
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default IndividualRestaurant;
