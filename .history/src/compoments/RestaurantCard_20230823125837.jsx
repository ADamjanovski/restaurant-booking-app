import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <button className="w-10/12  bg-secondary mb-4 flex justify-between items-center p-3 rounded-lg">
      <div className="flex flex-col mx-5">
        <h2 className="mb-3">{props.name}</h2>
        <p className="bg-primary w-min  rounded-lg px-2 py-1 text-black ">{props.rating}</p>
      </div>
      <ImageLoader img={props.img} />
    </button>
  );
};

export default RestaurantCard;
