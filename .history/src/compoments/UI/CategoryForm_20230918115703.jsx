import { useState } from "react";

const CategoryForm = ({ categories, onClose }) => {
  const [data, setData] = useState(categories);
  const changeCheck = (name) => {
    let temp = [...data];
    const index = temp.findIndex((item) => item.name === name);
    if (index === -1) return;
    temp[index].checked = !temp[index].checked;
    setData(temp);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let status = true;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].checked !== categories[i].checked) {
    //     status = false;
    //   }
    // }
    // if (status === true) {
    //   onClose();
    //   return;
    // }
    let checkedCategories;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked !== categories[i].checked) {
        status = false;
      }
    }
    console.log(data);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col">
        {data.map((category, index) => (
          <div key={index}>
            <input
              className="my-5 p-2 mx-3"
              type="checkbox"
              checked={category.checked}
              onChange={() => {
                changeCheck(category.name);
              }}
            />
            <label htmlFor={category.name} className="mx-3 text-xl ">
              {category.name}
            </label>
            <hr />
          </div>
        ))}
        <button className="my-5 p-2 mx-3 border rounded-md bg-accent self-center">
          Search Restaurants
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
