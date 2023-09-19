import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <div
      className="flex w-28 justify-between"
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      <Card>
        <span className="p-2">{props.name}</span>
        <img className="w-10" src={props.logo} />
      </Card>
    </div>
  );
};

export default IndividualCategory;
