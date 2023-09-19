import { useState } from "react";

const CategoryForm = ({ categories }) => {
  const [data, setData] = useState(categories);
  const changeCheck = (name) => {
    let temp = [...data];
    const index = temp.findIndex((item) => item.name === name);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setData(temp);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        {data.map((category, index) => (
          <div key={index}>
            <input className="my-2 p-2 mx-3"
              type="checkbox"
              checked={category.checked}
              onChange={() => {
                changeCheck(category.name);
              }}
            />
            <label htmlFor={category.name} className="mx-3 text-xl">{category.name}</label>
          </div>
        ))}
        <button>Search Restaurants</button>
      </form>
    </>
  );
};

export default CategoryForm;
