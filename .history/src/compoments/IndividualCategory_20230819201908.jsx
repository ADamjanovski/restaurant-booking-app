const IndividualCategory = (props) => {
  return (
    <div className="flex text-center">
      <span>{props.name}</span>
      <img src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
