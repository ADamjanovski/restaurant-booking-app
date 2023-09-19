import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <span c>{props.name}</span>
      <img className="w-10" src={props.logo} />
    </Card>
  );
};

export default IndividualCategory;
