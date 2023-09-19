const CategoryForm = ({ categories }) => {
  console.log({ isChecked });
  return (
    <>
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
    </>
  );
};

export default Checkbox;
