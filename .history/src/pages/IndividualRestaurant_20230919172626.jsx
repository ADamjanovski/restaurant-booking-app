import Footer from "../compoments/UI/Footer";
import MainNavigation from "../compoments/UI/MainNavigation";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../compoments/UI/Card";
import Carousel from "nuka-carousel";
import { Rating } from "@mui/material";
import FindTableForm from "../compoments/FindTableForm";
import ShowcaseTables from "../compoments/ShowcaseTables";
import { useEffect } from "react";
import { SetRating, getImages } from "../functions/Functions";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const IndividualRestaurant = () => {
  const ctx = useContext(AuthContext);
  const [tables, setTables] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [date, setDate] = useState();
  const [images, setImages] = useState();
  const { restraurantId } = useParams();
  const [rating, setUserRating] = useState();
  useEffect(() => {
    const data = getImages(restraurantId);
    setImages(data);
  }, [restraurantId]);
  console.log(images);
  return (
    <React.Fragment>
      <div>
        <Carousel>
          
          <img
            src="https://i.imgur.com/ENnqCYg.jpg"
            alt="photo"
            className="max-h-[650px] md:object-cover md:object-top-left w-screen "
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc-sOK06lnGkoPKN8_nVAXQcosENOcvxZRF-4DkvM3Opaz6TH7xxXqvm8v8NwK44ehqbyyMafp84wjEZPPw9JvC1QIW407zuGkbhIhxBgc_Pt7eZ0TgCAxN2inTGD__Onbe0e5Vy_iuD4rr-LKua3hEHXr21p9l7HpwvdOYIv2XrhbwTPhwdoeUbWbrgtIAE4E7aTPgjpcFihEaPj5AYasWNHsJtxytkvg-NhwJB1qEOB0KqG1zvZCm-C3MxW2R60DIHfaH1_lZBI0EEnt_y10CzbehAmBO6g6-n9lkVrYH8G3Jm6rxnunJaIuuTapFiDhnx26cWBdcdwIH6FEpI6Hcj1o23fkYfnLjaxjwLTO7L1eDCQSWGSTU46W87GAQYry88kQp0xkP1UUwULZBURnyp6PE4Ozy7GSvG2x2qlQ7ezxVYAtPEn3z6mmJnbrK2TCKj__uN6--hUkNmoqr_BBQHl8-pezijCxffK6NuTYwOCad26x-0ad-YXkHbXkNYw7biHEfO1tnog2dF-ZahqN9U5ulU5Y6Juu33BDVkcWue8ayync6EOBNQICkQEb_gsPEGdUt7JOFDJS0R75NImd00HfjnXrMo_iwLPle0SMuQMkEQdTBm0xGKIraF8rdYW4ncFjcMxiaIac_-g1NYdpU-v4lplEBSI0AifsyDWAmjrls7q3OAR8oh4i7OP38ga412-49qsQCPVVRr7Cz_jJB7KOB1kcTBVw9J3aKrKHOKa-VCfsdz1bd637lytneOwCgcQ8NJ1H3EvDru750MCyzWN1C7dlqbtS64etq9J5BMXVR0J7mGR9PZ3j5Ic6wGaCcI-aASxT5jrKUkjBdfsYS0n3057zB4lJ_74bKAlBDcBbsxl-kQxlmgnUZN20fdCM3JuAge_0A8wwKfWaBtlf9z=w1440-h942-s-no?authuser=0.jpg"
            alt="photo2 "
            className="max-h-[600px] md:object-cover md:object-top-left w-screen "
          />
        </Carousel>
      </div>
      <div className="md:w-8/12 md:m-auto">
        <Card>
          <FindTableForm
            hasError={setHasError}
            setTables={setTables}
            setDate={setDate}
          />
          {hasError && <p>Sorry, We have no tables left for that date!!</p>}
          <ShowcaseTables tables={tables} date={date} />
          <div className="text-center">
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                if (ctx.isLoggedIn) {
                  SetRating(ctx.user.id, ctx.token, restraurantId, newValue);
                  setUserRating(newValue);
                }
              }}
              controlled="true"
            />
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default IndividualRestaurant;
