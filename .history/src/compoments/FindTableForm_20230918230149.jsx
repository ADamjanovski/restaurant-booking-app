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
};
