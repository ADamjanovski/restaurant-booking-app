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
import { SetRating, getBiggsetTable, getImages } from "../functions/Functions";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const IndividualRestaurant = () => {
  const ctx = useContext(AuthContext);
  const [tables, setTables] = useState([]);
  const [hasError, setHasError] = useState({
    hasError: false,
    message : "",
  });
  const [date, setDate] = useState();
  const [images, setImages] = useState(null);
  const { restraurantId } = useParams();
  const [rating, setUserRating] = useState();
  const [biggestTable, setBiggestTable] = useState();
  useEffect(() => {
    getImages(restraurantId).then((data) => setImages(data));
    getBiggsetTable(restraurantId).then((data) => setBiggestTable(data));
  }, [restraurantId]);
  console.log(images);
  return (
    <React.Fragment>
      <div>
        <Carousel>
          {images &&
            images.map((image) => (
              <img
                src={image.url}
                alt="photo"
                className="max-h-[650px] md:object-cover md:object-top-left w-screen "
              />
            ))}
        </Carousel>
      </div>
      <div className="md:w-8/12 md:m-auto">
        <Card>
          <FindTableForm
            hasError={setHasError}
            setTables={setTables}
            setDate={setDate}
          />
          {hasError.hasError && <p>Sorry, We have no tables left for that date!!</p>}
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
