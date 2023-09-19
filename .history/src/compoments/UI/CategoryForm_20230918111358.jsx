const CategoryForm = ({ categories }) => {
  console.log({ isChecked });
  return (
    <>
      <form>
        {categories.map((category, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={category.checked}
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

export default CategoryForm;
