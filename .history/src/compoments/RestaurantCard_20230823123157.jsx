import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <div className="bg-secondary mb-4 flex justify-between items-center">
      <h2 className="mx-5">{props.name}</h2>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
