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

  const submitHandler = (event) => {
    event.preventDefault();
    <Navigate to="" />;
  };
  return (
    <form
      className="flex pr-0 box-border items-center  p-8"
      onSubmit={submitHandler}
    >
      <div className="relative">
        <input
          className="placeholder-white peer w-full pl-5 p-2 pr-20 rounded-lg ring-neutral-500 outline-none focus:ring-primary focus:border-none ring-2 "
          type="text"
          onChange={inputChangeHandler}
          id="search-bar"
          name="search-bar"
          placeholder="Search Here"
          value={searchInput}
          autoComplete="off"
        ></input>
        {searchInput.length > 0 && (
          <div className="border-t-0 peerflex  flex-col w-full max-h-40 overflow-y-auto absolute  rounded-md  border-neutral-500 border-solid border-2 empty:border-none">
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
                  onClick={() => {
                    clickedSuggestionHandler(restaurant.name);
                  }}
                >
                  {restaurant.name}
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="">
        <button className="bg-accent ml-4  p-2 border-b-solid rounded-xl border-neutral-500 border-2">
          {<SearchIcon />}{" "}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
