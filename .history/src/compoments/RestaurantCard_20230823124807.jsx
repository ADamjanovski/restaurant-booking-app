import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <button className="w-10/12  bg-secondary mb-4 flex justify-between items-center p-3 rounded-lg">
      <div className="flex flex-col items-center">
        <h2 className="mx-5">{props.name}</h2>
        <p className="bg-primary rounded-lg p-2 ">{props.rating}</p>
      </div>
      <ImageLoader img={props.img} />
    </button>
  );
};

export default RestaurantCard;
