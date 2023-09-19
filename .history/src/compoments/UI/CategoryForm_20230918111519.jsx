import { useState } from "react";

const CategoryForm = ({ categories }) => {
  const [data,]
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
