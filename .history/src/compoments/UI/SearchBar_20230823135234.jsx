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
  { name: "Destan1" },
  { name: "Desta" },
  { name: "Dest" },
  { name: "Des" },
];
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
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
  const FocusHandler = () => {
    setIsFocused(true);
  };
  const onBlurHandler = () => {
    setIsFocused(false);
  };
  return (
    <form
      className="flex pr-0 box-border items-center  p-8"
      onSubmit={submitHandler}
    >
      <div className="">
        <input
          className=" placeholder-white text-lg peer w-full pl-5 p-2 pr-20 rounded-lg ring-neutral-500 outline-none focus:ring-primary focus:border-none ring-2 "
          type="text"
          onChange={inputChangeHandler}
          id="search-bar"
          name="search-bar"
          placeholder="Search Here"
          value={searchInput}
          autoComplete="off"
          onFocus={FocusHandler}
          onBlur={onBlurHandler}
        ></input>
        {isFocused && (
          <div className="border-t-0 overscroll-none bg-background peer-focus:flex  flex-col w-full max-h-40 overflow-y-auto absolute  rounded-md  border-neutral-500 border-solid border-2 empty:border-none hidden">
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
                <button
                  className=" text-start text-lg cursor-pointer my-2 pl-5 border-b-solid border-white "
                  key={restaurant.name}
                  onMouseDown={() => {
                    clickedSuggestionHandler(restaurant.name);
                  }}
                >
                  {restaurant.name}
                </button>
              ))}
          </div>
        )}
      </div>
      <div className="">
        <button className="bg-accent ml-4 mr-2 p-2 border-b-solid rounded-xl border-neutral-500 border-2">
          {<SearchIcon />}{" "}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
