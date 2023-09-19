import Card from "./UI/Card";

const IndividualCategory = (props) => {
  const clickHandler = () => {
    link="/" + props.name;
    props.onClick()
  };
  return (
    <button
      className="flex justify-between bg-inherit bg-primary text-black rounded-md"
      onClick={clickHandler}
    >
      {props.logo.length === 0 ? (
        <p className="p-2 self-center text-lg">{props.name}</p>
      ) : (
        <p className="p-2 self-center text-lg">{props.name}</p>
      )}
      {props.logo.length > 0 && <img className="w-14" src={props.logo} />}
    </button>
  );
};

export default IndividualCategory;
