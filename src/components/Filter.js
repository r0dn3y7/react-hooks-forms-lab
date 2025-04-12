import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search} // Make it a controlled input
        onChange={(e) => onSearchChange(e.target.value)} // Trigger prop callback on change
      />
    </div>
  );
}

export default Filter;
