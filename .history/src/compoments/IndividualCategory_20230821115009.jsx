import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <Card>
      <div
        className="flex w-maxjustify-between bg-inherit bg-slate-300 text-black rounded-md"
        onClick={() => {
          props.onClick(props.name);
        }}
      > ame="w-10 " src={props.logo} />
      </div>
    </Card>
  );
};

export default IndividualCategory;
