import { useState, useEffect } from "react";
import SearchIcon from "../../assets/SearchIcon";
import { useNavigate } from "react-router-dom";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const debouncedInputChange = debounce(inputChangeHandler, 10);
  const clickedSuggestionHandler = (name) => {
    setSearchInput(name);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/${searchInput}`);
  };

  const FocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchInput.length >= 2) {
          const response = await fetch(
            `http://localhost:3000/api/restaurants/suggestions?name=${searchInput}`
          );
          const data = await response.json();
          setSuggestions(data.suggestions);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (isFocused) {
      fetchData();
    }
  }, [searchInput, isFocused]);

  return (
    <form
      className="flex pr-0 md:w-[70%] items-center  p-8"
      onSubmit={submitHandler}
    >
      <div className="ml-2 relative w-full">
        <input
          className=" placeholder-white text-lg peer w-full pl-5 p-2 pr-20 rounded-lg ring-neutral-500 outline-none focus:ring-primary focus:border-none ring-2 "
          type="text"
          onChange={(event) => {debouncedInputChange(event)}
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
            {suggestions.length > 0 &&
              suggestions.map((restaurant, index) => (
                <button
                  className=" text-start text-lg cursor-pointer my-2 pl-5 border-b-solid border-white "
                  key={index}
                  onMouseDown={() => {
                    clickedSuggestionHandler(restaurant);
                  }}
                >
                  {restaurant}
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
