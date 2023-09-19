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
            src="https://lh3.googleusercontent.com/pw/AIL4fc8Z0z81ROFHjpIDUStTHp8RAowkVyqD11CJeHNlORCska1WJx8XKBgXcqX2Mw-jWuntugGRSwYzGuf1pTEq5Nc_vsjFTK7_F3LQxOlexj2h9ZSgoDg0dxN1fkkmkErD2LZSkTDYyBROW0bUtzftmrKoZauZIlffdKJAKO5BWWjwa5R83eu8kiHQB9I0Cl0zWCWgI5WyfovVomaMnaBOgWOvqlYmdbspd4TjToh49WlZekhiPMteuPAkld3nqjQ1qSiN8B1K63gN9_MexyQwsa92ME79QrI76g_tzjiIMNg7wT_1XUx0d_B8bgPGsZsht-eiDdzm10SVwj0Jgm4PbG84ylrMA3OcyyE0DTAfJdJzC3Mvp2hVh1Bb3aCYdcdbvCul57FlFa426KRJwuA_FHV2VnABWCUYVsk-jWU0zYwr7UfIHLb5rgq-h8beRX_5hRHlyQwxwh5FxVJhJVsKyWkrLP8ka0AfP6CJxqkEHRSE4h6_pTfpj4TN0RIHwT4JMHNOqS6iCuUHqhUE3tUGeHNzDt3dgtzmYNzr7VJiPbAgPXa1sHA4VmE1AU1kIT0C-cG-9BVa4nj_rDP5bVcuI-A4VrvqekqeahOllRXv2AYi1UhCbuxGNR-OwW4CFRZSYkScTTuKtUtH2yF7SwNbBbtHlaxQTPMOLSzemziK64IIwAA06yBKpHyuiMzQnTJVmJ5XrhRTXqk2hQAMWiqgogBp1gAWLrsbn-jR63BtOdrEB-J_ahF4bS34qkmnEyAOZuSV1swgjXnPT1q9YCadT2-f-372JGzdks-xxxhTZ8k5y-osfqJJmv281S5dei5N4Tq-mss0c3t6zQDtx3XTwVg2csDHaXt-h10cofeIghmL1ZWyXc9ROmZHQBHCJPmimucPC5ojnBUMYPFybdUjUwUB=w1440-h938-s-no?authuser=0.jpg"
            alt="photo"
            className="max-h-[800px] md:object-cover md:object-top-left w-screen "
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc-sOK06lnGkoPKN8_nVAXQcosENOcvxZRF-4DkvM3Opaz6TH7xxXqvm8v8NwK44ehqbyyMafp84wjEZPPw9JvC1QIW407zuGkbhIhxBgc_Pt7eZ0TgCAxN2inTGD__Onbe0e5Vy_iuD4rr-LKua3hEHXr21p9l7HpwvdOYIv2XrhbwTPhwdoeUbWbrgtIAE4E7aTPgjpcFihEaPj5AYasWNHsJtxytkvg-NhwJB1qEOB0KqG1zvZCm-C3MxW2R60DIHfaH1_lZBI0EEnt_y10CzbehAmBO6g6-n9lkVrYH8G3Jm6rxnunJaIuuTapFiDhnx26cWBdcdwIH6FEpI6Hcj1o23fkYfnLjaxjwLTO7L1eDCQSWGSTU46W87GAQYry88kQp0xkP1UUwULZBURnyp6PE4Ozy7GSvG2x2qlQ7ezxVYAtPEn3z6mmJnbrK2TCKj__uN6--hUkNmoqr_BBQHl8-pezijCxffK6NuTYwOCad26x-0ad-YXkHbXkNYw7biHEfO1tnog2dF-ZahqN9U5ulU5Y6Juu33BDVkcWue8ayync6EOBNQICkQEb_gsPEGdUt7JOFDJS0R75NImd00HfjnXrMo_iwLPle0SMuQMkEQdTBm0xGKIraF8rdYW4ncFjcMxiaIac_-g1NYdpU-v4lplEBSI0AifsyDWAmjrls7q3OAR8oh4i7OP38ga412-49qsQCPVVRr7Cz_jJB7KOB1kcTBVw9J3aKrKHOKa-VCfsdz1bd637lytneOwCgcQ8NJ1H3EvDru750MCyzWN1C7dlqbtS64etq9J5BMXVR0J7mGR9PZ3j5Ic6wGaCcI-aASxT5jrKUkjBdfsYS0n3057zB4lJ_74bKAlBDcBbsxl-kQxlmgnUZN20fdCM3JuAge_0A8wwKfWaBtlf9z=w1440-h942-s-no?authuser=0.jpg"
            alt="photo2 "
            className="max-h-[800px] md:object-cover md:object-top-left w-screen "
          />
        </Carousel>
      </div>
      <div className="md:w-8/12 md:m-auto">
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
