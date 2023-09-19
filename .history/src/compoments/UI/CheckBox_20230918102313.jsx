const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  console.log({ isChecked });
  return (
    <>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
    </>
  );
};

export default Checkbox;
