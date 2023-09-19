const CategoryForm = ({ isChecked, label, checkHandler, index }) => {
  console.log({ isChecked });
  return (
    <>
      <div className="App">
      <form>
        {dataForm.map((li, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={li.isChecked}
              onChange={() => {
                changeCheck(li.p_id);
              }}
            />
            <label htmlFor={li.p_name}>{li.p_name}</label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Checkbox;
