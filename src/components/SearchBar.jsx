import React from "react";
import "./style/SearchBar.css";

const SearchBar = ({ setSearchFilter }) => {
  return (
    <div className={"searchbar-container"}>
      <input
        type="text"
        placeholder="Søk   &#x1F50D;"
        onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
