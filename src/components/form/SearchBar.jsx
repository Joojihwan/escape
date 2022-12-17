import React from "react";
import Search_image from '../../assets/search_btn.png'
import './SearchBar.css'

function SearchBar (props) {
    return (
        <div className="searchBar">
            <input placeholder="Search Whiskey Name"/>
            <img 
                className='search_btn' 
                src={Search_image} 
                onClick={()=> {
                    console.log('search_btn');
            }} />
        </div>
    );
}

export default SearchBar;