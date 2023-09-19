import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <span>{props.name}</span>
      <img className="w-10" src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
