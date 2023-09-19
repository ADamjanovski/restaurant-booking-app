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
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </>
  );
};

export default Checkbox;
