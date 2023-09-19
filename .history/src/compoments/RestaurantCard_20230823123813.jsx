import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <div className="w-11/12 bg-secondary mb-4 flex justify-between items-center p-3 rounded-xl">
      <div>
        <h2 className="mx-5">{props.name}</h2>
        <p>{props.rating}</p>
      </div>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
