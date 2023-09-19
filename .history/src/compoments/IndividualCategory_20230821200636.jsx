import { Link } from "react-router-dom";
import Card from "./UI/Card";

const IndividualCategory = (props) => {
  const clickHandler = () => {
    let link="/" + props.name;
    props.onClick(link);
  };
  return (
    <Link to={""}
      className="flex justify-between bg-inherit bg-primary text-black rounded-md"
    >
      {props.logo.length === 0 ? (
        <p className="p-2 self-center text-lg">{props.name}</p>
      ) : (
        <p className="p-2 self-center text-lg">{props.name}</p>
      )}
      {props.logo.length > 0 && <img className="w-14" src={props.logo} />}
    </Link >
  );
};

export default IndividualCategory;
