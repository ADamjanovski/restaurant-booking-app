import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <div
      className="flex justify-between bg-inherit bg-primary text-black rounded-md"
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      {props.logo.length === 0 ? :<span className="p-2">{props.name}</span>}
      {props.logo.length > 0 && <img className="w-14" src={props.logo} />}
    </div>
  );
};

export default IndividualCategory;
