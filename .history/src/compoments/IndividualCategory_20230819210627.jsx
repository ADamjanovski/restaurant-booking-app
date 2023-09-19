import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <span className="p-2">{props.name}</span>
      <img className="" src={props.logo} />
    </Card>
  );
};

export default IndividualCategory;
