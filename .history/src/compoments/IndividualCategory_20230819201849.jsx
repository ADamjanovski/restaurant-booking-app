const IndividualCategory = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <img src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
