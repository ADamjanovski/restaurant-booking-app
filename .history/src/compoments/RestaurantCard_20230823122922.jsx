import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  console.log(props.img);
  return (
    <div className="bg-secondary">
      <h2>{props.name}</h2>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
