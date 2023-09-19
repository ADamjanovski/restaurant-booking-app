const IndividualCategory = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.logo} />
    </div>
  );
};

export default IndividualCategory;
