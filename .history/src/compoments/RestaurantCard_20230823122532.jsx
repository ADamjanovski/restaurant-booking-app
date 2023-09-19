import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
    console.lo
  return (
    <div>
      <h2>{props.name}</h2>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
