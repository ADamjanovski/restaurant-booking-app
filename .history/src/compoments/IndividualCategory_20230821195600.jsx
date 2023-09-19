import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <button
      className="flex justify-between bg-inherit bg-primary text-black rounded-md"
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      {props.logo.length === 0 ? <p className="p-2 self-center text-lg">{props.name}</p> :<p className="p-2 self-center text-lg">{props.name}</p>}
      {props.logo.length > 0 && <img className="w-14" src={props.logo} />}
    </div>
  );
};

export default IndividualCategory;
