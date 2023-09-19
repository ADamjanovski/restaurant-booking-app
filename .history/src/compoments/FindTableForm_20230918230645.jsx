import { useRef } from "react";

const FindTableForm = ({ hasError, setTables }) => {
  const dateRef = useRef();
  const numberRef = useRef();
  const findTableHandler = async (event) => {
    event.preventDefault();
    hasError(false);
    const data = await fetch("http://localhost:3000/api/restaurants/tables", {
      method: "POST",
      body: JSON.stringify({
        id: +restraurantId,
        seats: +numberRef.current.value,
        datetime: new Date(dateRef.current.value),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const tables = await data.json();
    if (tables.length > 0) {
      setTables(tables);
    } else {
      hasError(true);
    }
  };
  return (
    <form onSubmit={findTableHandler} className="flex flex-col ">
      <label htmlFor="date " className="mx-3">
        Choose Date:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="mx-3 my-1 rounded-md"
        ref={dateRef}
      />
      <label htmlFor="seats " className="mx-3">
        Enter number of people:
      </label>
      <input
        type="number"
        id="seats"
        name="seats"
        className="mx-3 my-1 rounded-md p-1"
        max={16}
        ref={numberRef}
      />
      <button className="m-3 bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 ">
        Find Table
      </button>
    </form>
  );
};

export default FindTableForm;
