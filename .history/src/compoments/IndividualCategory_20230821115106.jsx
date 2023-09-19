import Card from "./UI/Card";

const IndividualCategory = (props) => {
  return (
    <div
      className="flex justify-between bg-inherit bg-slate-300 text-black rounded-md"
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      <span className="p-2">{props.name}</span>
      <img className="w-14" src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
