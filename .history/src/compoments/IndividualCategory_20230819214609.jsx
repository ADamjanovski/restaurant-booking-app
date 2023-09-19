import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <div
        className="flex w-32 justify-between bg-inherit  rounded-md"
        onClick={() => {
          props.onClick(props.name);
        }}
      >
        <span className="p-2">{props.name}</span>
        <img className="w-10" src={props.logo} />
      </div>
    </Card>
  );
};

export default IndividualCategory;
