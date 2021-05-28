import React from "react";

const SearchBar = ({ setSearchFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={"Søk etter utstillinger"}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
