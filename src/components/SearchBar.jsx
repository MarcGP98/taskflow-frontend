import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por título..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;