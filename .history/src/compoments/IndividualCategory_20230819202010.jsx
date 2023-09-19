const IndividualCategory = (props) => {
  return (
    <div className="flex text-center">
      <span>{props.name}</span>
      <img className="w-10" src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
