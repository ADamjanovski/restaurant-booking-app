import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <button className="w-4/6 bg-secondary mb-4 flex justify-between items-center p-3 rounded-lg">
      <div>
        <h2 className="mx-5">{props.name}</h2>
        <p>{props.rating}</p>
      </div>
      <ImageLoader img={props.img} />
    </button>
  );
};

export default RestaurantCard;
