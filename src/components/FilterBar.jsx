import React from "react";

function FilterBar({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(event) => setFilter(event.target.value)}>
      <option value="all">Todas</option>
      <option value="pending">Pendientes</option>
      <option value="completed">Completadas</option>
    </select>
  );
}

export default FilterBar;