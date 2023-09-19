import ImageLoader from "./UI/ImageLoader";

const RestaurantCard = (props) => {
  return (
    <div className="w-[80%] bg-secondary mb-4 flex justify-between items-center p-3 rounded-xl">
      <div>
        <h2 className="mx-5">{props.name}</h2>
      </div>
      <ImageLoader img={props.img} />
    </div>
  );
};

export default RestaurantCard;
