import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
