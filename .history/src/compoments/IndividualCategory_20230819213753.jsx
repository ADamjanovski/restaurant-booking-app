import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <div></div>
    <Card>
      <span className="p-2">{props.name}</span>
      <img className="w-10" src={props.logo} />
    </Card>
  );
};

export default IndividualCategory;
