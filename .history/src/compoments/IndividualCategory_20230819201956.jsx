const IndividualCategory = (props) => {
  return (
    <div className="flex text-center">
      <span>{props.name}</span>
      <img className="w-3" src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
