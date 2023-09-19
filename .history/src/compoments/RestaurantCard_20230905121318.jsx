import { Link } from "react-router-dom";
import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  console.log(props.id);
  return (
    <Link
      to={props.name}
      className="w-10/12 md:w-[68%] md:ml-8 bg-secondary mb-4 flex justify-between items-center p-5 rounded-lg"
    >
      <div className="flex flex-col mx-5">
        <h2 className="mb-3 text-xl">{props.name}</h2>
        <p className="bg-primary shadow w-min  rounded-lg px-2 py-1 text-black ">
          {props.rating}
        </p>
      </div>
      <ImageLoader img={props.img} />
    </Link>
  );
};

export default RestaurantCard;
