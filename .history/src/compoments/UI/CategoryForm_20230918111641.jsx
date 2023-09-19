import { useState } from "react";

const CategoryForm = ({ categories }) => {
  const [data, setData] = useState(categories);
  const changeCheck = (name) => {
    let temp = [...dataForm];
    const index = temp.findIndex((item) => item.name === name);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setData(temp);
  };

  const submitHandler
  return (
    <>
      <form>
        {data.map((category, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={category.checked}
              onChange={() => {
                changeCheck(category.name);
              }}
            />
            <label htmlFor={category.name}>{category.name}</label>
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
