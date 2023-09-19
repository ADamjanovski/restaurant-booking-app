const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  console.log({ isChecked });
  return (
    <>
      <label htmlFor={`checkbox-${index}`}>{label}</label>

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
