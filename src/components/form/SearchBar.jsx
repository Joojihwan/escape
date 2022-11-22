import React from "react";

function SearchBar (props) {
    return (
        <div className="searchBar">
            <input placeholder="Search Whiskey Name"/>
            <button>Search</button>
        </div>
    );
}

export default SearchBar;