import { useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import { Navigate } from "react-router-dom";
const restaurants = [
  { name: "Concept" },
  { name: "Dukat" },
  { name: "Fabrika" },
  { name: "Bonita" },
  { name: "Elizabet" },
  { name: "Gino" },
  { name: "Destan" },
];
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const clickedSuggestionHandler = (name) => {

    setSearchInput(name);
  };

  const submitHandler = (event)=>{
    event.preventDefault();
    <Navigate to=""/>
  }
  return (
    <form className="flex pr-0 box-border" onSubmit={submitHandler}>
      <div className="">
        <input
          className="mt-5 placeholder-white w-full pl-5 p-2 pr-20 rounded-lg border-neutral-500 outline-none focus:ring-neutral-500 border-solid border-2"
          type="text"
          onChange={inputChangeHandler}
          id="search-bar"
          name="search-bar"
          placeholder="Search Here"
          value={searchInput}
        ></input>
        {searchInput.length>0 && <div className=" border-t-0 flex flex-col w-full   rounded-md  border-neutral-500 border-solid border-2 empty:border-none">
          {restaurants
            .filter((restaurant) => {
              const lowerCaseInput = searchInput.toLowerCase();
              const lowerCaseSuggestion = restaurant.name.toLowerCase();
              return (
                lowerCaseInput !== "" &&
                lowerCaseSuggestion.startsWith(lowerCaseInput) &&
                lowerCaseInput !== lowerCaseSuggestion
              );
            })
            .map((restaurant) => (
              <div
                className=" text-start cursor-pointer my-2 pl-5 border-b-solid border-white "
                key={restaurant.name}
                onClick={()=>{
                  clickedSuggestionHandler(restaurant.name)
                }}
              >
                {restaurant.name}
              </div>
            ))}
        </div>
      }</div>
      <div className="">
      <button className="bg- ml-4 mt-5 p-2 border-b-solid rounded-xl border-neutral-500 border-2">{<SearchIcon />} </button></div>
    </form>
  );
};

export default SearchBar;
