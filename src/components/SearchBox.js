import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2 blue">
      <input
        className="br2 pa3 b--green bg-lightest-blue garamond "
        type="Search"
        placeholder="Search Puppet"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
