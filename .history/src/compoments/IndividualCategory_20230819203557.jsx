import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <span className="text-center">{props.name}</span>
      <img className="w-10" src={props.logo} />
    </Card>
  );
};

export default IndividualCategory;
